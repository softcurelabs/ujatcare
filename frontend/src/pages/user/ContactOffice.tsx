import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Link } from "react-router-dom";
import { ButtonLoader } from "../../components/ButtonLoader";
import { ContactOfficeType } from "../../types/ContactOfficeType";
import { contactAddAsync } from "../../store/contact/ContactSlice";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      subject: yup.string().required(t("Please select subject")).min(10, "Atleast 10 char required"),
      description: yup.string().required(t("Please select description")).min(10, "Atleast 10 char required"),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactOfficeType>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await dispatch(contactAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          reset();
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        setError(reason.message);
        setIsLoading(false);
      });
  });

  return (
    <>
      {toast && (
        <div className="alert alert-success">
          {toast}
          <Link to={"/dashboard-1"}> Back to Dashboard.</Link>
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
                  label="Subject"
                  type="text"
                  register={register}
                  name="subject"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="subject"
                />
                <FormInput
                  label="Description"
                  type="textarea"
                  register={register}
                  name="description"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="description"
                />
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                )}
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

const ContactOffice = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Contact Office", path: "/contact-office", active: true },
        ]}
        title={"Contact Office"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default ContactOffice;
