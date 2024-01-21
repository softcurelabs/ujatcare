import React from "react";
import { Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import Statistics from "./Statistics";
import ManageTickets from "./ManageTickets";

// dummy data
import { ticketDetails } from "./data";

const List = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Tickets", path: "/apps/tickets/list" },
          { label: "Ticket List", path: "/apps/tickets/list", active: true },
        ]}
        title={"Request"}
      />
      <Row>
        <Col>
          <ManageTickets ticketDetails={ticketDetails} />
        </Col>
      </Row>
    </>
  );
};

export default List;
