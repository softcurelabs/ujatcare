import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { NoticeData } from "../../types/NoticeType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Link, useParams } from "react-router-dom";
import { ButtonLoader } from "../../components/ButtonLoader";
import { flatAddAsync } from "../../store/flat/FlatSlice";
import { FlatEditType } from "../../types/FlatType";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(t("Please select name")).min(2, "Atleast 2 char required"),
    })
  );
  const params = useParams();
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
  } = useForm<FlatEditType>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await dispatch(flatAddAsync(data))
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
          <Link to={`/suites/${params.id}`}> Back to Suite.</Link>
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
                <FormInput type="hidden" register={register} name="apartment_id" value={params.id}/>
                <FormInput
                  label="Name"
                  type="text"
                  register={register}
                  name="name"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="name"
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

const New = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Suite", path: "/suite/new" },
        ]}
        title={"New Suite"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default New;
