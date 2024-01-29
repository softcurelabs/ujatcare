import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { noticeAsync, noticeDeleteAsync } from "../../store/notice/NoticeSlice";
import { NoticesType } from "../../types/NoticeType";
import Pagination from "../../components/Pagination";
import { Confirmation } from "../../components/Confirmation";

interface NoticeHighlightType {
  notices: NoticesType | null;
}
const BasicTable = ({ notices }: NoticeHighlightType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<Number>(0);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(noticeAsync(1));
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
                <th>Date</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices && notices.data.length > 0 ? (
                notices.data.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.schedule_date}</td>
                      <td>{record.title}</td>
                      <td>
                        <React.Fragment>
                          {/* <Link to="#" className="action-icon">
                            {" "}
                            <i className="mdi mdi-eye"></i>
                          </Link> */}
                          <Link to={`/notice/${record.id}`} className="action-icon">
                            {" "}
                            <i className="mdi mdi-square-edit-outline"></i>
                          </Link>
                          <Link
                            to="#"
                            className="action-icon"
                            onClick={() => {
                              setId(record.id);
                              setShow(true);
                            }}
                          >
                            {" "}
                            <i className="mdi mdi-delete"></i>
                          </Link>
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
        <Confirmation
          show={show}
          targetId={id}
          submitForm={(id) => {
            dispatch(noticeDeleteAsync(id))
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
      </Card.Body>
    </Card>
  );
};

const Notices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { notices } = useSelector((state: RootState) => ({
    notices: state.Notice.notices,
  }));
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(noticeAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Notices", path: "/notice", active: true }]}
        title={"Notices"}
      />

      <Row>
        <Col lg={12}>
          <Button
            className="waves-effect waves-light mb-3"
            onClick={() => {
              let path = `/notice/new`;
              navigate(path);
            }}
          >
            <i className="mdi mdi-plus-circle me-1"></i> Add New
          </Button>
          {notices && (
            <>
              <BasicTable notices={notices} />
              <Pagination
                tableProps={{
                  pageCount: notices.last_page,
                  state: {
                    pageIndex: notices.current_page,
                  },
                  pageOptions: {
                    length: notices.total,
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

export default Notices;
