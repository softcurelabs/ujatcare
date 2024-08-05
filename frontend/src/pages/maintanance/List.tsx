import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { maintananceAsync } from "../../store/maintanance/MaintananceSlice";
import { MaintanancesType } from "../../types/MaintananceType";

interface MaintananceListType {
  maintanance: MaintanancesType | null;
}
const BasicTable = ({ maintanance }: MaintananceListType) => {
  const dispatch = useDispatch<AppDispatch>();
  let { user, userCustomer } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    userCustomer: state.CustomerAuth.user,
  }));
  if (userCustomer) {
    user = userCustomer;
  }
  const [show, setShow] = useState<boolean>(false);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(maintananceAsync(1));
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
                <th>Suite</th>
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
                      <td role="cell">{record.flat_name}</td>
                      <td role="cell">{record.work_requested}</td>
                      <td role="cell">{record.repaired_username}</td>
                      <td role="cell">
                        <StatusColumn status={record.status_name} />
                      </td>
                      <td role="cell">{record.created_at}</td>
                      <td role="cell">{record.action_date}</td>
                      <td role="cell">
                        <>
                          <Dropdown className="btn-group" align="end">
                            <Dropdown.Toggle
                              variant="light"
                              className="table-action-btn btn-sm"
                            >
                              <i className="mdi mdi-dots-horizontal"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {" "}
                              <Dropdown.Item
                                href={`maintanance/${record.id}`}
                              >
                                <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                {user &&
        (user.user_role.includes("admin") ||
          user.user_role.includes("staff")) ? <span>Edit Maintanance</span> : <span>View Maintanance</span>}
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
          "bg-secondary text-light": [
            "In Progress",
            "Pending",
            "On Hold",
          ].includes(status),
        })}
      >
        {status}
      </span>
    </>
  );
};

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { maintanance } = useSelector((state: RootState) => ({
    maintanance: state.Maintanance.maintanance,
  }));
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(maintananceAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "All Maintenance Requests", path: "/maintanance", active: true },
        ]}
        title={"All Maintenance Requests"}
      />

      <Row>
        <Col lg={12}>
          <Button
            className="waves-effect waves-light mb-3"
            onClick={() => {
              let path = `/maintanance/create`;
              navigate(path);
            }}
          >
            <i className="mdi mdi-plus-circle me-1"></i> Add New
          </Button>
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

export default List;
