import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Bug from "./Bug";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  let { user, customerUser } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));
  if (!user) {
    user = customerUser;
  }
  const [show, setShow] = useState<boolean>(false);
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          
          <Row>
            <Col md={6}>{currentYear} &copy; Ujatcare </Col>
          </Row>
        </div>
        {(user.user_role.includes("admin") ||
          user.user_role.includes("staff")) && <Button className="position-fixed bottom-0 end-0 me-3 mb-3 z-3" onClick={()=> setShow(true)}>  <i className="bi bi-bug" title=" Experiencing issue?"></i></Button>}
      </footer>
      <Bug show={show} onHide={()=> {setShow(false)}}  onSubmit={()=> {}}></Bug>
    </React.Fragment>
  );
};

export default Footer;
