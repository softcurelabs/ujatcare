import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

import ManageTickets from "./ManageTickets";

// dummy data
import { ticketDetails } from "./data";

const Inspection = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          {
            label: "Maintanance Inspection History",
            path: "/apps/tickets/list",
            active: true,
          },
        ]}
        title={"Maintanance Inspection History"}
      />
      {/* <Row>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-tag"
            variant="primary"
            stats="3947"
            desc="Total Tickets"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-clock"
            variant="warning"
            stats="624"
            desc="Pending Tickets"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-check-circle"
            variant="success"
            stats="3195"
            desc="Closed Tickets"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            icon="fe-trash-2"
            variant="danger"
            stats="128"
            desc="Deleted Tickets"
          />
        </Col>
      </Row> */}

      <Row>
        <Col>
          <ManageTickets ticketDetails={ticketDetails} />
        </Col>
      </Row>
    </>
  );
};

export default Inspection;
