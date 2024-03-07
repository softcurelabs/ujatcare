import { Row, Col } from "react-bootstrap";

import PageTitle from "../../components/PageTitle";

import ManageTickets from "./ManageTickets";

import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { inspectionAsync } from "../../store/inspection/InspectionSlice";

const Inspection = () => {
  const { inspection } = useSelector((state: RootState) => ({
    inspection: state.Inspection.inspection,
  }));

  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);

  useEffect(() => {
    dispatch(inspectionAsync(currentPage));
  }, [currentPage]);

  const reload = useCallback(() => {
    dispatch(inspectionAsync(currentPage));
  }, []);

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          {
            label: "Maintanance Inspection History",
            path: "/apps/tickets/list",
            active: true,
          },
        ]}
        title={"Maintanance Inspection History"}
      />

      <Row>
        <Col>
          {inspection && (
            <>
              <ManageTickets inspection={inspection} reload={reload} />
              <Pagination
                tableProps={{
                  pageCount: inspection.last_page,
                  state: {
                    pageIndex: inspection.current_page,
                  },
                  pageOptions: {
                    length: inspection.total,
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
    </>
  );
};

export default Inspection;
