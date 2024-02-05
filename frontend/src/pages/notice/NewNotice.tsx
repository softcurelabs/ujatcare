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
      title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
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
  const onSubmit = handleSubmit(async (data) => {
    await dispatch(noticeAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          reset();
        }
      })
      .catch((reason) => {
        setError(reason.message);
      });
  });

  const [sechduleDate, setSechduleDate] = useState<Date>(new Date());

  return (
    <>
      {toast && (
        <div className="alert alert-success">
          {toast}
          <Link to={"/notice"}> Back to Notice.</Link>
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
                  label="Title"
                  type="textarea"
                  register={register}
                  name="title"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="title"
                />
                <FormInput
                  type="hidden"
                  register={register}
                  name="schedule_date"
                  value={sechduleDate.toISOString().split("T")[0]}
                  key="schedule_date"
                />
                <div className="mb-3">
                  <label className="form-label">Schedule Date</label> <br />
                  <HyperDatepicker
                    value={sechduleDate}
                    minDate={new Date()}
                    showTimeSelect={true}
                    dateFormat="MM-DD-YYYY HH:mm"
                    onChange={(date) => {
                      setSechduleDate(date);
                      setValue("schedule_date", date.toLocaleString("sv-SE"));
                    }}
                  />
                </div>
                <Button variant="primary" type="submit">
                  Publish
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

const NewNotice = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Notices", path: "/notice" },
          { label: "Notice", path: "/notice/new", active: true },
        ]}
        title={"Notice"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default NewNotice;
