import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { noticeHighlightAsync } from "../../store/notice/NoticeSlice";
import { NoticesType } from "../../types/NoticeType";
import Pagination from "../../components/Pagination";

interface NoticeHighlightType {
  notices: NoticesType | null;
}
const BasicTable = ({ notices }: NoticeHighlightType) => {
  return (
    <Card>
      <Card.Body>
        <div className="table-responsive">
          <Table className="mb-0 table-striped dt-responsive nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {notices && notices.data.length > 0 ? (
                notices.data.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.schedule_date}</td>
                      <td>{record.title}</td>
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

const CustomerNotices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { notices } = useSelector((state: RootState) => ({
    notices: state.Notice.notices,
  }));

  useEffect(() => {
    dispatch(noticeHighlightAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Bulletin Board", path: "/notice", active: true },
        ]}
        title={"Bulletin Board"}
      />

      <Row>
        <Col lg={12}>
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

export default CustomerNotices;
