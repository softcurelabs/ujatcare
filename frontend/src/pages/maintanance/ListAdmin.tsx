import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { maintananceAdminAsync, maintananceAsync } from "../../store/maintanance/MaintananceSlice";
import { MaintanancesType } from "../../types/MaintananceType";

interface MaintananceListType {
  maintanance: MaintanancesType | null;
}
const BasicTable = ({ maintanance }: MaintananceListType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(maintananceAdminAsync(1));
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
          <Table className="table table-centered react-table dt-responsive nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Requested By</th>
                <th>Work to be done</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Resolved At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {maintanance && maintanance.data.length > 0 ? (
                maintanance.data.map((record, index) => {
                  return (
                    <tr key={index} role="row">
                      <td role="cell">{record.id}</td>
                      <td role="cell">{record.tanent_name}</td>
                      <td role="cell">{record.work_requested}</td>
                      <td role="cell">{record.repaired_username}</td>
                      <td role="cell">
                        <StatusColumn status={record.status_name} />
                      </td>
                      <td role="cell">{record.created_at}</td>
                      <td role="cell">{record.action_date}</td>
                      <td role="cell">
                        <React.Fragment>
                          <>
                            <Dropdown className="btn-group" align="end">
                              <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {" "}
                                <Dropdown.Item href={`maintanance-admin/${record.id}`}>
                                  <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                  Edit Maintanance
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
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
      </Card.Body>
    </Card>
  );
};

const StatusColumn = ({ status }: { status: string }) => {
  return (
    <>
      <span
        className={classNames("badge", {
          "bg-success": status === "Done",
          "bg-secondary text-light": ["In Progress", "Pending", "On Hold"].includes(status),
        })}
      >
        {status}
      </span>
    </>
  );
};

const ListAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { maintanance } = useSelector((state: RootState) => ({
    maintanance: state.Maintanance.maintanance,
  }));

  useEffect(() => {
    dispatch(maintananceAdminAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Maintanance", path: "/maintanance", active: true }]}
        title={"Maintanance"}
      />

      <Row>
        <Col lg={12}>
          {maintanance && (
            <>
              <BasicTable maintanance={maintanance} />
              <Pagination
                tableProps={{
                  pageCount: maintanance.last_page,
                  state: {
                    pageIndex: maintanance.current_page,
                  },
                  pageOptions: {
                    length: maintanance.total,
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

export default ListAdmin;
