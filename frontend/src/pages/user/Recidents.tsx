import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown, FormSelect } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { Confirmation } from "../../components/Confirmation";
import {ArchiveConfirmation} from "../../components/ArchiveConfirmation";
import { recidentAsync, recidentSyncAsync, userArchiveAsync, userDeleteAsync } from "../../store/user/UserSlice";
import { UsersType } from "../../types/UserType";
import ImportUsers from "./ImportUsers";
import { FormInput } from "../../components";
import { flatAsync } from "../../store/flat/FlatSlice";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface UsersDataType {
  users: UsersType | null;
  page: Number;
  filter: string;
}

const BasicTable = ({ users, page, filter }: UsersDataType) => {
  const [show, setShow] = useState<boolean>(false);
  const [archiveConfirm, setArchiveConfirm] = useState<boolean>(false);
  const [id, setId] = useState<Number>(0);

  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(recidentAsync({page: page, filter: filter}));
  }, [show, filter]);

  const onClick = (id: Number) => {
    setToast("");
    setError("");
    dispatch(recidentSyncAsync(id)).unwrap().then((response) => {
      if (response && response.status === true) {
        setToast(response.message);
        dispatch(recidentAsync({page: page, filter: filter}));
      } else {
        setError(response.message);
      }
    })
    .catch((reason) => {
      setError(reason.message);
    });;
  }
  return (
    <Card>
      <Card.Body>
        {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        <div className="table-responsive">
          <Table className="mb-0 table-striped dt-responsive nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>Suite</th>
                <th>Apartment</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Quickbook Sync</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.data.length > 0 ? (
                users.data.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.user.flat_name}</td>
                      <td>{record.user.apartment_name}</td>
                      <td>{record.user.name}</td>
                      <td>{record.user.email}</td>
                      <td>{record.phone_number}</td>
                      <td><h5>
        <span
          className={classNames("badge", {
            "bg-success": record.quickbook_id !== null,
            "bg-warning": record.quickbook_id === null,
          })}
        >
          {record.quickbook_id ? "Syced" : "Not Synced"}
        </span>
      </h5></td>
                      <td>
                        <>
                          <Dropdown className="btn-group" align="end">
                            <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
                              <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {
                                  setId(record.user.id);
                                  setArchiveConfirm(true);
                            }}>
                                <i className="mdi mdi-pencil me-2 text-muted font-18 vertical-middle"></i>
                                Archive Tenant
                            </Dropdown.Item>
                              <Dropdown.Item href={`assign-permission/${record.user.id}`}>
                                <i className="mdi mdi-pencil me-2 text-muted font-18 vertical-middle"></i>
                                Manage Permission
                              </Dropdown.Item>
                              <Dropdown.Item href={`user/${record.user.id}`}>
                                <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                Edit Profile
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  setId(record.user.id);
                                  setShow(true);
                                }}
                              >
                                <i className="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>
                                Delete Profile
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Link to="#" onClick={() => onClick(record.user.id)} aria-disabled={true} className="action-icon" title="Sync with Quickbook">
              {" "}
              <i className="mdi mdi-sync"></i>
            </Link>
                        </>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p>No Data Found</p>
              )}
            </tbody>
          </Table>
          <Confirmation
            show={show}
            targetId={id}
            submitForm={(id) => {
              dispatch(userDeleteAsync(id))
                .unwrap()
                .then((response) => {
                  if (response && response.status === true) {
                    setToast(response.message);
                    setShow(false);
                  }
                })
                .catch((reason) => {
                  setError(reason.message);
                  setShow(false);
                });
            }}
            handleClose={() => setShow(false)}
          />
          <ArchiveConfirmation
            show={archiveConfirm}
            targetId={id}
            submitForm={(id, reason) => {
                console.log(reason);
              dispatch(userArchiveAsync({id, reason}))
                .unwrap()
                .then((response) => {
                  if (response && response.status === true) {
                    setToast(response.message);
                    setArchiveConfirm(false);
                  }
                })
                .catch((reason) => {
                  setError(reason.message);
                  setArchiveConfirm(false);
                });
            }}
            handleClose={() => setArchiveConfirm(false)}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

const Recidents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [filter, setFilter] = useState("");
  const { users, flats } = useSelector((state: RootState) => ({
    users: state.User.users,
    flats: state.Flat.flats,
  }));
  useEffect(() => {
    dispatch(flatAsync());
  }, []);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(recidentAsync({page: currentPage, filter: filter}));
  }, [currentPage, show]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Tenants", path: "/user", active: true }]}
        title={"Tenants"}
      />

      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={8}>
              <Button
                className="waves-effect waves-light mb-3 me-3"
                onClick={() => {
                  let path = `/user-resident/new`;
                  navigate(path);
                }}
              >
                <i className="mdi mdi-plus-circle me-1"></i> Add New
              </Button>
              <Button
                className="waves-effect waves-light mb-3"
                onClick={() => {
                  setShow(true);
                }}
              >
                <i className="mdi mdi-plus-circle me-1"></i> Import Tenants
              </Button>
            </Col>
            <Col lg={4}>
              <FormInput type="select" name="apartment-selection" onChange={(e) => setFilter(e.target.value)} label="Filter" containerClass="d-flex" className="mb-2 ms-2 form-check-inline">
                <option value={""}>Select Apartment</option>
                {flats.length &&
                  flats.map((flat) => (
                    <option key={`apartment${flat.id}`} value={`${flat.id}`}>
                      {flat.name.toString()}
                    </option>
                  ))}
              </FormInput>
            </Col>
          </Row>
          {users && (
            <>
              <BasicTable users={users} page={currentPage} filter={filter} />
              <Pagination
                tableProps={{
                  pageCount: users.last_page,
                  state: {
                    pageIndex: users.current_page,
                  },
                  pageOptions: {
                    length: users.total,
                  },
                  gotoPage: (page: Number) => {
                    setCurrentPage(page);
                  },
                }}
                sizePerPageList={[{ text: "10", value: 10 }]}
              />
            </>
          )}
          <ImportUsers
            show={show}
            onHide={() => {
              setShow(false);
            }}
            onSubmit={() => {
              setShow(false);
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Recidents;
