import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";

const Reports = () => {

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Reports", path: "/reports", active: true },
        ]}
        title={"Reports"}
      />

      <Row>
        <Col lg={12}>
          Coming soon
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Reports;
