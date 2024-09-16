import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Dropdown, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { applicationArchiveAsync, applicationUnArchiveAsync, applicationAsync, applicationRemoveAsync } from "../../store/application/ApplicationSlice";
import { ApplicationType, ApplicationsType } from "../../types/ApplicationType";
import { AssignFlat } from "./AssignFlat";
import { ViewApplicationModal } from "./ViewApplicationModal";

const BasicTable = ({ application }: { application: ApplicationsType }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);
  const [showApp, setShowApp] = useState<boolean>(false);
  const [data, setData] = useState<ApplicationType | null>(null);
  const [id, setId] = useState<Number>(0);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(applicationAsync(1));
  }, [dispatch, showApp]);

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
                <th>Id</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Approved By</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {application.data.length > 0 ? (
                application.data.map((record, index) => {
                  return (
                    <tr key={index} className="">
                      <td>{record.id}</td>
                      <td>{record.email}</td>
                      <td>{record.first_name_first}</td>
                      <td>{record.approved_by ? record.approved_by.first_name : ''}</td>
                      <td>{record.created_at}</td>
                      <td>{record.status===2 ? 'Archived': (record.status===1 ? 'Closed' : 'Open')}</td>
                      <td>
                        <React.Fragment>
                          <>
                            <Button
                              className="btn-secondary"
                              onClick={() => {
                                setShowApp(true);
                                setData(record);
                              }}
                              size="sm"
                            >
                              View
                            </Button>
                            {/* {record.status === 0 && (
                              <Button
                                className="btn-secondary ms-2"
                                onClick={() => {
                                  setId(record.id);
                                  setShow(true);
                                }}
                                size="sm"
                              >
                                Assign Flat
                              </Button>
                            )} */}
                          </>
                        </React.Fragment>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p>No Data Found</p>
              )}
            </tbody>
          </Table>
        </div>

        <ViewApplicationModal
          show={showApp}
          data={data}
          submitForm={() => {}}
          handleArchive={() => {
            if (data?.id) {
                dispatch(applicationArchiveAsync(data.id)).unwrap().then((response) => {
                    setToast(response?.message);
                    setShowApp(false);
                });
            }
          }}
          handleUnArchive={() => {
            if (data?.id) {
                dispatch(applicationUnArchiveAsync(data.id)).unwrap().then((response) => {
                    setToast(response?.message);
                    setShowApp(false);
                });
            }
          }}
          handleRemove={() => {
            if (data?.id) {
                dispatch(applicationRemoveAsync(data.id)).unwrap().then((response) => {
                    setToast(response?.message);
                    setShowApp(false);
                });
            }
          }}
          handleClose={() => setShowApp(false)}
        />
      </Card.Body>
    </Card>
  );
};

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { application } = useSelector((state: RootState) => ({
    application: state.Application.application,
  }));

  useEffect(() => {
    dispatch(applicationAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Application", path: "/notice", active: true },
        ]}
        title={"Application"}
      />

      <Row>
        <Col lg={12}>
          {application && (
            <>
              <BasicTable application={application} />
              <Pagination
                tableProps={{
                  pageCount: application.last_page,
                  state: {
                    pageIndex: application.current_page,
                  },
                  pageOptions: {
                    length: application.total,
                  },
                  gotoPage: (page: Number) => {
                    setCurrentPage(page);
                  },
                }}
                sizePerPageList={[{ text: "10", value: 10 }]}
              />
            </>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default List;
