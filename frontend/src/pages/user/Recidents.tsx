import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { Confirmation } from "../../components/Confirmation";
import { recidentAsync, userDeleteAsync } from "../../store/user/UserSlice";
import { UsersType } from "../../types/UserType";
import ImportUsers from "./ImportUsers";

interface UsersDataType {
  users: UsersType | null;
}

const BasicTable = ({ users }: UsersDataType) => {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<Number>(0);

  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(recidentAsync(1));
  }, [show]);

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
                <th>Unit</th>
                <th>Apartment</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
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
                      <td>
                        <>
                          <Dropdown className="btn-group" align="end">
                            <Dropdown.Toggle
                              variant="light"
                              className="table-action-btn btn-sm"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                href={`assign-permission/${record.user.id}`}
                              >
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
        </div>
      </Card.Body>
    </Card>
  );
};

const Recidents = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const [show, setShow] = useState<boolean>(false);
  const { users } = useSelector((state: RootState) => ({
    users: state.User.users,
  }));
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(recidentAsync(currentPage));
  }, [currentPage, show]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Residence", path: "/user", active: true }]}
        title={"Residence"}
      />

      <Row>
        <Col lg={12}>
          <Button
            className="waves-effect waves-light mb-3 me-3"
            onClick={() => {
              let path = `/user-recident/new`;
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
            <i className="mdi mdi-plus-circle me-1"></i> Import User
          </Button>
          {users && (
            <>
              <BasicTable users={users} />
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
