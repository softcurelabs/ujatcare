import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget2 from "../../../components/StatisticsWidget2";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget2 variant="info" description="Total Tickets" stats="178" icon="fe-cpu" />
        </Col>

        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="blue"
            description="Ticket Close"
            stats="50"
            icon="fe-aperture"
            counterOptions={{
              prefix: "",
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="warning"
            description="Ticket Pending"
            stats="60"
            icon="fa-plug"
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="success"
            description="Ticket Resolve"
            stats="68"
            icon="fe-bar-chart-2"
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
