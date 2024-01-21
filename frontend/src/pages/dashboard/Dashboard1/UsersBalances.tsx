import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface UsersBalancesProps {
  balances: {
    id: number;
    avatar: string;
    name: string;
    currency: string;
    balance: number;
    orders: number;
  }[];
}

const UsersBalances = ({ balances }: UsersBalancesProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Notices</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Notice</th>
                </tr>
              </thead>
              <tbody>
                {(balances || []).map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>2023-12-12</td>

                      <td>
                        <p className="mb-0 text-muted">Lorent IP lumsum</p>
                      </td>
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

export default UsersBalances;
