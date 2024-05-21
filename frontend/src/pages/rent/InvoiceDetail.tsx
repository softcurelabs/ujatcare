import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";

import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { invoiceShowAsync } from "../../store/invoice/InvoiceSlice";
import { InvoiceType, Status } from "../../types/InvoiceType";

const PaymentStatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        <span
          className={classNames("badge", {
            "bg-soft-success text-success": row.status == "2",
            "bg-soft-danger text-danger": row.status == "1",
            "bg-soft-info text-info": row.status == "0",
          })}
        >
          {row.status == "2" && <i className="mdi mdi-bitcoin me-1"></i>}
          {row.status == "1" && <i className="mdi mdi-cancel me-1"></i>}
          {row.status == "0" && <i className="mdi mdi-cash me-1"></i>}
          {Status[row.status]}
        </span>
      </h5>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        <span
          className={classNames("badge", {
            "bg-success": row.quickbook_id !== null,
            "bg-warning": row.quickbook_id === null,
          })}
        >
          {row.quickbook_id ? "Syced" : "Not Synced"}
        </span>
      </h5>
    </>
  );
};
// track order
const TrackOrder = ({ invoice }: { invoice: InvoiceType }) => {
  return (
    <>
      <div className="track-order-list">
        <ul className="list-unstyled">
          <li className="completed">
            <h5 className="mt-0 mb-1">Invoice Created</h5>
            <p className="text-muted">{invoice.created_at}</p>
          </li>
          <li className="completed">
            <h5 className="mt-0 mb-1">Due Date</h5>
            <p className="text-muted">{invoice.due_date}</p>
          </li>
          
        </ul>
        
        {/* <div className="text-center mt-4">
          <Link to="#" className="btn btn-primary">
            Show Details
          </Link>
        </div> */}
      </div>
      <div >
      <ul className="list-group">
        <li className="list-group-item">
            <h5 className="mt-0 mb-1">QuickBook Status</h5>
            <p className="text-muted"><StatusColumn row={invoice} /></p>
          </li>
          <li className="list-group-item">
            <h5 className="mt-0 mb-1">Order Status</h5>
            <p className="text-muted"><PaymentStatusColumn row={invoice} /></p>
            
          </li>
        </ul>
      </div>
    </>
  );
};

// Item Table
const Items = ({ invoice }: { invoice: InvoiceType }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-bordered table-centered mb-0">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {(invoice.items || []).map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>{item.qty}</td>
                  <td>$ {item.total}</td>
                </tr>
              );
            })}
            {/* <tr>
              <th scope="row" colSpan={4} className="text-end">
                Sub Total :
              </th>
              <td>
                <div className="fw-bold">{order.sub_total}</div>
              </td>
            </tr>
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Shipping Charge :
              </th>
              <td>{order.shipping_charge}</td>
            </tr>
            <tr>
              <th scope="row" colSpan={4} className="text-end">
                Estimated Tax :
              </th>
              <td>{order.tax}</td>
            </tr> */}
            <tr>
              <th scope="row" colSpan={2} className="text-end">
                Total :
              </th>
              <td>
                <div className="fw-bold">$ {invoice.items[0].total}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
// order details
const InvoiceDetail = () => {
  const params = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const [invoice, setInvoice] = useState<InvoiceType | null>(null);

  useEffect(() => {
    dispatch(invoiceShowAsync(params.id))
      .unwrap()
      .then((invoice) => setInvoice(invoice));
  }, []);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Rent History", path: "/invoice" },
          {
            label: "Rent Detail",
            path: "/invoice/id",
            active: true,
          },
        ]}
        title={"Rent Detail"}
      />
      {invoice && (
        <Row>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3">Track Order</h4>

                <Row>
                  <Col lg={6}>
                    <div className="mb-4">
                      <h5 className="mt-0">Order ID:</h5>
                      <p>{invoice.id}</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="mb-4">
                      <h5 className="mt-0">Quickbook ID:</h5>
                      <p>{invoice.quickbook_id}</p>
                    </div>
                  </Col>
                </Row>

                <TrackOrder invoice={invoice} />
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card>
              <Card.Body>
                <h4 className="header-title mb-3">Items from Order {invoice.id}</h4>
                <Items invoice={invoice} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default InvoiceDetail;
