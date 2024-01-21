import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";

import AppMenu from "../../../layouts/Menu";
import {
  getAdminItems,
  getCustomerItems,
  getMenuItems,
} from "../../../helpers/menu";

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
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form>
            </div>
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
