import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";
import AppMenu from "../../../layouts/Menu";
import { getCustomerItems, getMenuItems } from "../../../helpers/menu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Dashboard1 = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { t } = useTranslation();
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
            {/* <div className="page-title-right">
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
            </div> */}
            <h4 className="page-title">Dashboard</h4>
          </div>
        </Col>
      </Row>

      {/* <Statistics /> */}

      <Row>
        <Col xl={6}>
          <Card className="widget-rounded-circle">
            <Card.Body>
              <AppMenu menuItems={getCustomerItems()} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <RevenueHistory revenueHistory={revenueHistory} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard1;
