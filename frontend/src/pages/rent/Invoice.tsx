import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  invoiceAsync,
  invoiceDeleteAsync,
  invoiceSyncAsync,
} from "../../store/invoice/InvoiceSlice";
import { Status } from "../../types/InvoiceType";
import Pagination from "../../components/Pagination";
import Create from "./Create";
import { occupantsAsync } from "../../store/user/UserSlice";
import { Confirmation } from "../../components/Confirmation";
import { set } from "react-hook-form";

/* payment column render */
const PaymentStatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        <span
          className={classNames("badge", {
            "bg-soft-success text-success": row.status == "2",
            "bg-soft-danger text-danger": row.status == "1",
            "bg-soft-info text-info": row.status == "0",
          })}
        >
          {row.status == "2" && <i className="mdi mdi-bitcoin me-1"></i>}
          {row.status == "1" && <i className="mdi mdi-cancel me-1"></i>}
          {row.status == "0" && <i className="mdi mdi-cash me-1"></i>}
          {Status[row.status]}
        </span>
      </h5>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        <span
          className={classNames("badge", {
            "bg-success": row.quickbook_id !== null,
            "bg-warning": row.quickbook_id === null,
          })}
        >
          {row.quickbook_id ? "Syced" : "Not Synced"}
        </span>
      </h5>
    </>
  );
};

/* action column render */
const ActionColumn = ({ row, deleteInvoice }: { row: any, deleteInvoice(arg: Number): void; }) => {
  const dispatch = useDispatch<AppDispatch>();
  let { user, customerUser } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));

  if (!user) {
    user = customerUser;
  }

  const onClick = (id: { id: number }) => {
    dispatch(invoiceSyncAsync(id));
  };
  

  return (
    <>
      <Link to={`/invoice/${row.id}`} className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <>
        {user.user_role.includes("admin") || user.user_role.includes("staff") ? (
          <>
            <Link to={`/invoice-edit/${row.id}`} className="action-icon">
              {" "}
              <i className="mdi mdi-square-edit-outline"></i>
            </Link>
            <Link to="#" className="action-icon" onClick={() => deleteInvoice(row.id)}>
              {" "}
              <i className="mdi mdi-delete"></i>
            </Link>
            <Link
              to="#"
              onClick={() => onClick(row.id)}
              aria-disabled={true}
              className="action-icon"
              title="Sync with Quickbook"
            >
              {" "}
              <i className="mdi mdi-sync"></i>
            </Link>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
};

const Invoice = () => {
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState<Number>(0);
  const [deleteShow, setDeleteShow] = useState<boolean>(false);
  const [filter, setFilter] = useState("");
  
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { invoice, users, refresh, message, status } = useSelector((state: RootState) => ({
    invoice: state.Invoice.invoice,
    users: state.User.occupants,
    refresh: state.Invoice.refresh,
    message: state.Invoice.message,
    status: state.Invoice.status,
  }));
  const [show, setShow] = useState<boolean>(false);
  let { user, customerUser } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));

  if (!user) {
    user = customerUser;
  }
  useEffect(() => {
    if (user.user_role.includes("admin") || user.user_role.includes("staff")) {
      dispatch(occupantsAsync());
    }
  }, []);

  useEffect(() => {
    dispatch(invoiceAsync({ page: currentPage, filter }));
  }, [currentPage, filter, refresh, show, deleteShow]);

  // change order status group
  const changeOrderStatusGroup = (OrderStatusGroup: string) => {
    setFilter(OrderStatusGroup);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          {
            label: "Rent history",
            path: "/invoice",
            active: true,
          },
        ]}
        title={"Rent History"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              {status && <div className="alert alert-success">{message}</div>}
              {!status && message && (
                <div
                  className="alert alert-danger mt-3"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: message }}
                ></div>
              )}
              <Row className="align-items-center">
                <Col lg={8}>
                  <form className="row gy-2 gx-2 align-items-center justify-content-lg-start justify-content-between">
                    <div className="col-auto">
                      <div className="d-flex align-items-center w-auto">
                        <label htmlFor="status-select" className="me-2">
                          Status
                        </label>
                        <select
                          className="form-select"
                          id="status-select"
                          onChange={(e: any) => changeOrderStatusGroup(e.target.value)}
                        >
                          <option value="">All</option>
                          {Object.keys(Status).map((key) => (
                            <option value={key} key={`status${key}`}>
                              {Status[key]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </form>
                </Col>

                <Col lg={4}>
                  <div className="text-lg-end mt-xl-0 mt-2">
                    {user.user_role.includes("admin") || user.user_role.includes("staff") ? (
                      <Button className="btn  mb-2 me-2" onClick={() => setShow(true)}>
                        <i className="mdi mdi-basket me-1"></i> Create a Invoice
                      </Button>
                    ) : (
                      <></>
                    )}

                    {/* <Button className="btn btn-light mb-2">Export</Button> */}
                  </div>
                </Col>
              </Row>

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
                          <th>Suite</th>
                          <th>Status</th>
                          <th>Due Date</th>
                          <th>Created At</th>
                          <th>QuickBook Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice && invoice.data.length > 0 ? (
                          invoice.data.map((record, index) => {
                            return (
                              <tr key={index} role="row">
                                <td role="cell">
                                  <Link to={`/invoice/${record.id}`} className="text-body fw-bold">
                                    #{record.id}
                                  </Link>
                                </td>
                                <td role="cell">
                                  {record.flat?.name} - {record.flat?.apartment?.name}
                                </td>
                                <td role="cell">
                                  <PaymentStatusColumn row={record} />
                                </td>
                                <td role="cell">{record.due_date}</td>
                                <td role="cell">{record.created_at}</td>
                                <td role="cell">
                                  <StatusColumn row={record} />
                                </td>
                                <td role="cell">
                                  <ActionColumn row={record} deleteInvoice={(id)=> {
                                    setDeleteShow(true);
                                    setId(id);
                                  }}/>
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
                  {invoice && (
                    <Pagination
                      tableProps={{
                        pageCount: invoice.last_page,
                        state: {
                          pageIndex: invoice.current_page,
                        },
                        pageOptions: {
                          length: invoice.total,
                        },
                        gotoPage: (page: Number) => {
                          setCurrentPage(page);
                        },
                      }}
                      sizePerPageList={[{ text: "10", value: 10 }]}
                    />
                  )}
                </Card.Body>
              </Card>
              {users && (
                <Confirmation
                title="Are you sure you want to delete invoice?"
                  show={deleteShow}
                  targetId={id}
                  submitForm={(id) => {
                    setToast("");
                    setError("");
                    dispatch(invoiceDeleteAsync(id))
                      .unwrap()
                      .then((response) => {
                        if (response && response.status === true) {
                          setToast(response.message);
                          setDeleteShow(false);
                        }
                      })
                      .catch((reason) => {
                        setError(reason.message);
                        setDeleteShow(false);
                      });
                  }}
                  handleClose={() => setDeleteShow(false)}
                />
              )}
              {users && (
                <Create
                  users={users}
                  show={show}
                  onHide={() => {
                    setShow(false);
                  }}
                  onSubmit={() => {}}
                ></Create>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Invoice;
