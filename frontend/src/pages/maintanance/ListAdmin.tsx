import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import {
    maintananceAdminAsync,
    maintananceAsync,
} from "../../store/maintanance/MaintananceSlice";
import { MaintanancesType } from "../../types/MaintananceType";
import { FormInput } from "../../components";

interface MaintananceListType {
    maintanance: MaintanancesType | null;
}
const BasicTable = ({ maintanance }: MaintananceListType) => {
    const dispatch = useDispatch<AppDispatch>();
    let navigate = useNavigate();
    const [show, setShow] = useState<boolean>(false);
    const [toast, setToast] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        dispatch(maintananceAdminAsync({ page: 1, status }));
    }, [show, status]);

    return (
        <Card>
            <Card.Body>
                {toast && <div className="alert alert-success">{toast}</div>}
                {error && (
                    <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>
                )}
                <Row>
                    <Col lg={9} className=""><Button
                        className="waves-effect waves-light mb-3"
                        onClick={() => {
                            let path = `/maintanance/create-admin`;
                            navigate(path);
                        }}
                    >
                        <i className="mdi mdi-plus-circle me-1"></i> Add New
                    </Button></Col>
                    <Col lg={3} >
                        <FormInput type="select" name="filter" onChange={(e) => setStatus(e.target.value)} label="Filter" containerClass="d-flex" className="mb-2 ms-2 form-check-inline">
                            <option value={""}>Select Status</option>
                            <option key={0} value={0}>In Progress</option>
                            <option key={1} value={1}>Pending</option>
                            <option key={2} value={2}>Archived</option>
                        </FormInput>
                    </Col>
                </Row>
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
                                                <React.Fragment>
                                                    <>
                                                        <a href={`maintanance-admin/${record.id}`} title="View Maintanance"><i className="mdi mdi-eye me-2 text-muted font-18 vertical-middle"></i></a>
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
                breadCrumbItems={[
                    { label: "All Maintenance Requests", path: "/maintanance", active: true },
                ]}
                title={"All Maintenance Requests"}
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
