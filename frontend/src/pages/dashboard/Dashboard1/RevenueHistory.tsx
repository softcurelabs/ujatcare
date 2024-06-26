import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface RevenueHistoryProps {
  revenueHistory: {
    id: number;
    marketplaces: string;
    ago: string;
  }[];
}

const RevenueHistory = ({ revenueHistory }: RevenueHistoryProps) => {
  return (
    <>
      <Card className="bg-info">
        <Card.Body>
          {/* <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

          <h4 className="header-title mb-3">Notice</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th> Published On </th>
                  {/* <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {(revenueHistory || []).map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <h5 className="m-0 fw-normal">{item.marketplaces}</h5>
                      </td>

                      <td>{item.ago}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RevenueHistory;
