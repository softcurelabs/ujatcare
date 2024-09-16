import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import { ButtonLoader } from "../../components/ButtonLoader";
import {  flatShowAsync, flatUpdateAsync } from "../../store/flat/FlatSlice";
import {  FlatEditType } from "../../types/FlatType";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(t("Please select name")).min(2, "Atleast 2 char required"),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const [apartmentId, setApartmentId] = useState(0);
  const params = useParams();
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(flatShowAsync(params.id))
      .unwrap()
      .then((response) => {

            setValue("id", Number(response.id));
            setValue("name", response.name.toString());
            setValue("apartment_id", response.apartment_id);
            setApartmentId(response.apartment_id);
      })
      .catch((error) => setError(error));
  }, []);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FlatEditType>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await dispatch(flatUpdateAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
        //   reset();
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
          <Link to={`/suites/${apartmentId}`}> Back to Suites.</Link>
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
                <FormInput type="hidden" register={register} name="id" />
                <FormInput type="hidden" register={register} name="apartment_id" />
                <FormInput
                  label="Name"
                  type="text"
                  register={register}
                  name="name"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="title"
                />
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Publish
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

const Edit = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Suites", path: "/suite" },
          { label: "Edit Suite", path: "/Suite/new", active: true },
        ]}
        title={"Edit Suite"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Edit;
