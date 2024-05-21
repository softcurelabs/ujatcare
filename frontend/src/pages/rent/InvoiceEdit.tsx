import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import * as yup from "yup";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { invoiceShowAsync, invoiceUpdateAsync } from "../../store/invoice/InvoiceSlice";
import { InvoiceEditType, InvoiceType, Status } from "../../types/InvoiceType";
import { useForm } from "react-hook-form";
import { FormInput } from "../../components";
import { ButtonLoader } from "../../components/ButtonLoader";
import HyperDatepicker from "../../components/Datepicker";

const PaymentStatusColumn = ({ row,  register,
  errors,
 }: { row: any,  register: any;
  errors: any;
 }) => {
  return (
    <>
      <FormInput
            label="Status"
            type="select"
            name="invoice_status"
            className="form-control-sm fs-5"
            containerClass={"mb-3"}
            labelClassName=" d-none"
            register={register}
            key="invoice_status"
            errors={errors}
          >
            {Object.keys(Status).map((key) => (
              <option value={key} key={`status${key}`}>
                {Status[key]}
              </option>
            ))}
          </FormInput>
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
const TrackOrder = ({
  invoice,
  register,
  errors,
  setValue,
}: {
  invoice: InvoiceType;
  register: any;
  errors: any;
  setValue: any;
}) => {
  console.log(invoice.due_date, "Asdf");
  const [selectedDate, setSelectedDate] = useState(new Date(invoice.due_date.toString()));
  return (
    <>
      <div className="track-order-list">
        <ul className="list-unstyled">
          <li className="completed">
            <div><h5 className="mt-0 mb-1">Invoice Created</h5></div>
            <div><p className="text-muted">{invoice.created_at}</p></div>
          </li>
          <li className="completed">
            <h5 className="mt-0 mb-1">Due Date</h5>
            <div className="text-muted"><HyperDatepicker
              hideAddon={true}
              showTimeSelect={false}
              minDate={new Date()}
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setValue("due_date", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["due_date"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["due_date"]!.message}
              </Form.Control.Feedback>
            ) : null}</div>
          </li>
        </ul>

        {/* <div className="text-center mt-4">
          <Link to="#" className="btn btn-primary">
            Show Details
          </Link>
        </div> */}
      </div>
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <div><h5 className="mt-0 mb-1">QuickBook Status</h5></div>
            <div className="text-muted">
              <StatusColumn row={invoice} />
            </div>
          </li>
          <li className="list-group-item">
          <div><h5 className="mt-0 mb-1">Order Status</h5></div>
          <div><div className="text-muted">
              <PaymentStatusColumn row={invoice} register={register} errors={errors} />
            </div></div>
          </li>
        </ul>
      </div>
    </>
  );
};

// Item Table
const Items = ({
  invoice,
  register,
  errors,
}: {
  invoice: InvoiceType;
  register: any;
  errors: any;
}) => {
  return (
    <>
      <div className="table-responsive mb-2">
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
                  <th scope="row">
                    <FormInput
                      label="Name"
                      type="text"
                      register={register}
                      name="name"
                      errors={errors}
                      className="form-control-sm"
                      containerClass={"mb-3 input-group"}
                      labelClassName="d-none"
                      size={2}
                      key="name"
                    />
                  </th>
                  <td>{item.qty}</td>
                  <td>
                    <FormInput
                      label="Total"
                      type="text"
                      register={register}
                      name="total"
                      symbol="$"
                      errors={errors}
                      className="form-control-sm"
                      containerClass={"mb-3 input-group"}
                      labelClassName="d-none"
                      size={2}
                      key="total"
                    />
                  </td>
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
                <div className="fw-bold"> {invoice.items[0].total}</div>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </>
  );
};
// order details
const InvoiceEdit = () => {
  const params = useParams();
  const schemaResolver = yupResolver(yup.object().shape({}));
  const dispatch = useDispatch<AppDispatch>();
  const [invoice, setInvoice] = useState<InvoiceType | null>(null);
  const [toast, setToast] = useState("");
  const [error, setLocalError] = useState("");
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch(invoiceShowAsync(params.id))
      .unwrap()
      .then((invoice) => {
        setInvoice(invoice);
        setValue("name", invoice.items[0].name);
        setValue('invoice_status', invoice.status);
        setValue('due_date', invoice.due_date);
        setValue("total", invoice.items[0].total);
        setValue("id", invoice.id);
      });
  }, []);
  const methods = useForm<InvoiceEditType>({
    defaultValues: {},
    resolver: schemaResolver,
  });
  const {
    handleSubmit,
    register,
    setError,
    control,
    setValue,
    formState: { errors },
  } = methods;
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    dispatch(invoiceUpdateAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          setLocalError("");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          //   signCanvas.current?.clear();
        } else {
          setLocalError(response?.message);
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            setError(element, { message: reason.errors[element].toString() });
          } catch (errror) {}
        }
        setIsLoading(false);
      });
  });

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Rent History", path: "/invoice" },
          {
            label: "Rent Edit",
            path: "/invoice/id",
            active: true,
          },
        ]}
        title={"Rent Edit"}
      />
      {invoice && (
        <form onSubmit={onSubmit}>
          {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div
            className="alert alert-danger mt-3"
            role="alert"
            dangerouslySetInnerHTML={{ __html: error }}
          ></div>
        )}
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
                  <FormInput type="hidden" register={register} name="id"/>
                  <TrackOrder invoice={invoice} register={register} errors={errors} setValue={setValue} />
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card>
                <Card.Body>
                  <h4 className="header-title mb-3">Items from Order {invoice.id}</h4>
                  <Items invoice={invoice} register={register} errors={errors} />
                  {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                )}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={12}>
            
            </Col>
          </Row>
        </form>
      )}
    </React.Fragment>
  );
};

export default InvoiceEdit;
