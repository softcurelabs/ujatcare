import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container-fluid">
          <Row>
            <Col md={6}>{currentYear} &copy; Ujatcare </Col>
          </Row>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
