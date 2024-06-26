import React, { useState } from "react";
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
import { noticeAddAsync } from "../../store/notice/NoticeSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Link } from "react-router-dom";
import { ButtonLoader } from "../../components/ButtonLoader";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
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
  } = useForm<NoticeData>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await dispatch(noticeAddAsync(data))
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
                    dateFormat="MM-dd-yyyy HH:mm"
                    onChange={(date) => {
                      setSechduleDate(date);
                      setValue("schedule_date", date.toLocaleString("sv-SE"));
                    }}
                  />
                </div>
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

const NewNotice = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Bulletin Board", path: "/notice" },
          { label: "Post a Bulletin", path: "/notice/new", active: true },
        ]}
        title={"Post a Bulletin"}
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
