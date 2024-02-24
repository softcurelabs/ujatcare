import React from "react";
import { Row, Col, Card, Table, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";

interface TableRecords {
  date: string;
  title: string;
}

// dummy records
const records: TableRecords[] = [
  { date: "2024-01-20", title: "Helloween celebration  " },
  { date: "2024-01-24", title: "Monthly meeting" },
  { date: "2024-01-29", title: "Quarterly meeting" },
  { date: "2024-10-28", title: "Christmas celebration" },
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
          <Table className="mb-0 table-striped dt-responsive nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {(records || []).map((record, index) => {
                return (
                  <tr key={index}>
                    <th>{record.date}</th>
                    <td>{record.title}</td>
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

const Notices = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Tables", path: "/ui/tables/basic" },
          { label: "Bulletin Board", path: "/ui/tables/basic", active: true },
        ]}
        title={"Bulletin Board"}
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

export default Notices;
