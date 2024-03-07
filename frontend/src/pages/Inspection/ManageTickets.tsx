import React, { useState } from "react";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { Card, Button, Dropdown, Table } from "react-bootstrap";
import classNames from "classnames";

// components
// import Table from "../../components/Table";

// dummy data
import { InspectionsType, Priority, Status } from "../../types/InspectionType";
import { inspectionAsync, inspectionDeleteAsync } from "../../store/inspection/InspectionSlice";
import { Confirmation } from "../../components/Confirmation";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

/* id column render */
const IdColumn = ({ row }: { row: any }) => {
  return (
    <>
      <b>{row.id}</b>
    </>
  );
};

/* priority column render */
const PriorityColumn = ({ row }: { row: any }) => {
  return (
    <>
      <span
        className={classNames("badge", {
          "bg-soft-secondary text-secondary": row.priority === 1,
          "bg-soft-warning text-warning": row.priority === 2,
          "bg-soft-danger text-danger": row.priority === 3,
        })}
      >
        {Priority[row.priority.toString()]}
      </span>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <span
        className={classNames("badge", {
          "bg-success": row.status === 1,
          "bg-warning": row.status === 2,
          "bg-secondary text-light": row.status === 3,
        })}
      >
        {Status[row.status.toString()]}
      </span>
    </>
  );
};

interface ManageTicketsProps {
  inspection: InspectionsType;
  reload: Function;
}

const ManageTickets = ({ inspection, reload }: ManageTicketsProps) => {
  let navigate = useNavigate();

  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<Number>(0);
  const [toast, setToast] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState("");
  return (
    <>
      <Card>
        <Card.Body>
          {toast && <div className="alert alert-success">{toast}</div>}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
          <Button
            className="waves-effect waves-light mb-3"
            onClick={() => {
              let path = `/inspection/new`;
              navigate(path);
            }}
          >
            <i className="mdi mdi-plus-circle me-1"></i> Add New
          </Button>
          {/* <h4 className="header-title mb-4">Manage Tickets</h4> */}

          <Table className="mb-0 table-striped dt-responsive react-table nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>Id</th>
                <th>Created By</th>
                <th>Subject</th>
                <th>Assignee</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Completion Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inspection.data.length > 0 ? (
                inspection.data.map((record, index) => {
                  return (
                    <tr key={index} className="">
                      <td>
                        #<IdColumn row={record} />
                      </td>
                      <td>{record.user ? record.user.name : ""}</td>
                      <td>{record.title}</td>
                      <td>
                        {!(record.inspection_by instanceof Number) ? record.inspection_by.name : ""}
                      </td>
                      <td>
                        <PriorityColumn row={record} />
                      </td>
                      <td>
                        <StatusColumn row={record} />
                      </td>
                      <td>{record.created_at}</td>
                      <td>{record.inspection_date}</td>
                      <td>
                        <React.Fragment>
                          <>
                            <Button
                              className="btn-secondary"
                              onClick={() => {
                                let path = `/inspection/${record.id}`;
                                navigate(path);
                              }}
                              size="sm"
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-secondary ms-2"
                              onClick={() => {
                                setId(record.id);
                                setShow(true);
                              }}
                              size="sm"
                            >
                              Delete
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
          <Confirmation
            show={show}
            targetId={id}
            submitForm={(id) => {
              dispatch(inspectionDeleteAsync(id))
                .unwrap()
                .then((response) => {
                  if (response && response.status === true) {
                    setToast(response.message);
                    setShow(false);
                    reload();
                  }
                })
                .catch((reason) => {
                  setError(reason.message);
                  setShow(false);
                });
            }}
            handleClose={() => setShow(false)}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ManageTickets;
