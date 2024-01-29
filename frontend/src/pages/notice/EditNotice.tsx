import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import HyperDatepicker from "../../components/Datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { NoticeData } from "../../types/NoticeType";
import { noticeEditAsync, noticeShowAsync } from "../../store/notice/NoticeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useParams } from "react-router-dom";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [sechduleDate, setSechduleDate] = useState<Date>(new Date());

  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(noticeShowAsync(params.id))
      .unwrap()
      .then((response) => {
        setValue("id", response.id);
        setValue("title", response.title);
        setValue("schedule_date", response.schedule_date);
        setSechduleDate(new Date(response.schedule_date));
      })
      .catch((error) => setError(error));
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NoticeData>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    await dispatch(noticeEditAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          //   reset();
        }
      })
      .catch((reason) => {
        setError(reason.message);
      });
  });

  return (
    <>
      {toast && <div className="alert alert-success">{toast}</div>}
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
                  name="title"
                  register={register}
                  errors={errors}
                  refCallback={inputRef}
                  rows="5"
                  containerClass={"mb-3"}
                  key="title"
                />
                <FormInput
                  type="hidden"
                  register={register}
                  name="schedule_date"
                  key="schedule_date"
                />
                <FormInput type="hidden" register={register} name="id" key="id" />
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
                  Submit
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

const EditNotice = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Notices", path: "/notice" },
          { label: "Edit", path: "#", active: true },
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
export default EditNotice;
