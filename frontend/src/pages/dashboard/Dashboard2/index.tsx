import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";

import AppMenu from "../../../layouts/Menu";
import { getAdminItems } from "../../../helpers/menu";
import Calandar from "./Calandar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Dashboard2 = () => {

  let {  user, userCustomer } = useSelector((state: RootState) => ({
    notices: state.Notice.notices,
    user: state.Auth.user,
    userCustomer: state.CustomerAuth.user,
  }));
  if (userCustomer) {
    user = userCustomer;
  }
  const [adminItems, setAdminItems] = useState(getAdminItems());
  useEffect(() => {
    if (user.user_role.includes('admin')) {
        setAdminItems([...adminItems, {
            key: "apartments",
            label: "Apartments",
            isTitle: false,
            url: "/apartment",
          }]);
      }
  }, []);
  
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
              <AppMenu menuItems={adminItems} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Calandar />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard2;
