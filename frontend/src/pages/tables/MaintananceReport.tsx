import React from "react";
import { Row, Col, Card, Table, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";

interface TableRecords {
  date: string;
  builds: string;
  unit: string;
  name: string;
  phone: string;
  compDate: string;
  notes: string;
  request: string;
}

// dummy records
const records: TableRecords[] = [
  {
    date: "1",
    builds: "Admin",
    unit: "10",
    name: "20",
    phone: "5",
    request: "fist request",
    notes: "Bell",
    compDate: "2023-12-14",
  },
  {
    date: "2",
    builds: "Jasmin",
    unit: "5",
    name: "16",
    phone: "4",
    request: "fist request",
    notes: "Bell",
    compDate: "2023-12-14",
  },
];

const ActionColumn = () => {
  return (
    <>
      <Dropdown className="btn-group" align="end">
        <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
          <i className="mdi mdi-dots-horizontal"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <i className="mdi mdi-pencil me-2 text-muted font-18 vertical-middle"></i>
            Maintanance Request
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
            Resedent Profile
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>
            Bullitin Bond
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const BasicTable = () => {
  return (
    <Card>
      <Card.Body>
        <div className="table-responsive">
          <Table className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Id</th>
                <th>Staff</th>
                <th>Open Tickets</th>
                <th>Resolved Tickets</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{record.date}</th>
                    <td>{record.builds}</td>
                    <td>{record.unit}</td>
                    <td>{record.name}</td>
                    <td>{record.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

const MaintananceReport = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Maintenance Report", path: "/maintenance-report", active: true },
        ]}
        title={"Maintenance Report"}
      />

      <Row>
        <Col lg={12}>
          <BasicTable />
        </Col>
      </Row>
      {/* 
        <Col lg={6}>
          <InverseTable />
        </Col>
      </Row> */}
      {/* 
      <Row>
        <Col lg={6}>
          <TableHeadOptions variant="light" />
        </Col>

        <Col lg={6}>
          <TableHeadOptions variant="dark" />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderedTable />
        </Col>

        <Col lg={6}>
          <BorderedColorTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <HoverableTable />
        </Col>

        <Col lg={6}>
          <SmallTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <BorderlessTable />
        </Col>

        <Col lg={6}>
          <BorderlessInverseTable />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <StripedRowsTable />
        </Col>

        <Col lg={6}>
          <TableFoot />
        </Col>
      </Row>

      <Row>
        <Col>
          <ResponsiveTable />
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default MaintananceReport;
