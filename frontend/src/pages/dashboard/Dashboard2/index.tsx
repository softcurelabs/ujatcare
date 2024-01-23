import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";

import AppMenu from "../../../layouts/Menu";
import { getAdminItems } from "../../../helpers/menu";

const Dashboard2 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right"></div>
            <h4 className="page-title">Dashboard</h4>
          </div>
        </Col>
      </Row>

      <Statistics />

      <Row>
        <Col xl={6}>
          <Card className="widget-rounded-circle">
            <Card.Body>
              <AppMenu menuItems={getAdminItems()} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}></Col>
      </Row>
    </>
  );
};

export default Dashboard2;
