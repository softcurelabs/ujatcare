import React from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget2 from "../../../components/StatisticsWidget2";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="info"
            description="Total Tickets"
            stats="178"
            icon="fe-cpu"
            progress={74}
          />
        </Col>

        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="blue"
            description="Ticket Close"
            stats="50"
            icon="fe-aperture"
            progress={60}
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
            progress={49}
          />
        </Col>
        <Col md={6} xl={3}>
          <StatisticsWidget2
            variant="success"
            description="Ticket Resolve"
            stats="68"
            icon="fe-bar-chart-2"
            progress={18}
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
