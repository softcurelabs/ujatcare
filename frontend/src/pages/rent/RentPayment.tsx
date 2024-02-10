import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput, VerticalForm } from "../../components";
import HyperDatepicker from "../../components/Datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { NoticeData } from "../../types/NoticeType";
import { noticeAddAsync } from "../../store/notice/NoticeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Link } from "react-router-dom";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup
        .string()
        .required(t("Please select title"))
        .min(10, "Atleast 10 char required"),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<NoticeData>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {});

  const [sechduleDate, setSechduleDate] = useState<Date>(new Date());

  return (
    <>
      {toast && (
        <div className="alert alert-success">
          {toast}
          <Link to={"/"}> Back to Dashboard.</Link>
        </div>
      )}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      <Card>
        <Card.Body>
          <Row>
            <Col lg={6}>
              <form onSubmit={onSubmit}>
                <FormInput
                  label="Bank name"
                  type="text"
                  register={register}
                  name="bank_name"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="bank_name"
                />
                <FormInput
                  label="Bank number"
                  type="text"
                  register={register}
                  name="bank_number"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="bank_number"
                />
                <FormInput
                  label="Routing number"
                  type="text"
                  register={register}
                  name="routing_number"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="routing_number"
                />
                <FormInput
                  label="Account number"
                  type="text"
                  register={register}
                  name="account_number"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="account_number"
                />
                <FormInput
                  label="IBAN"
                  type="text"
                  register={register}
                  name="iban"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="iban"
                />
                <FormInput
                  label="SWIFT / BIC"
                  type="text"
                  register={register}
                  name="swift"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="swift"
                />

                <Button variant="primary" type="submit">
                  Save Settings
                </Button>
              </form>
            </Col>

            <Col lg={6}></Col>
            <Col lg={3}></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const RentPayment = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Rent Payment", path: "/notice/new", active: true },
        ]}
        title={"Rent Payment"}
      />

      <Row>
        <Col>
          <Button className="waves-effect waves-light mb-3" onClick={() => {}}>
            <i className="mdi mdi-plus-circle me-1"></i> Make Payment
          </Button>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default RentPayment;
