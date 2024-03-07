import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Pagination from "../../components/Pagination";
import { applicationAsync } from "../../store/application/ApplicationSlice";
import { ApplicationsType } from "../../types/ApplicationType";
import { AssignFlat } from "./AssignFlat";

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { application } = useSelector((state: RootState) => ({
    application: state.Application.application,
  }));
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(applicationAsync(currentPage));
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Application", path: "/applications", active: true }]}
        title={"View Application"}
      />

      <Row>
        <Col lg={12}></Col>
      </Row>
    </React.Fragment>
  );
};
export default List;
