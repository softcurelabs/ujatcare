import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form, FormLabel, FormGroup } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import HyperDatepicker from "../../components/Datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Link, useParams } from "react-router-dom";
import { InspectionType } from "../../types/InspectionType";
import { flatAsync } from "../../store/flat/FlatSlice";
import { userAsync } from "../../store/user/UserSlice";
import {
  inspectionDocumentDeleteAsync,
  inspectionShowAsync,
  inspectionUpdateAsync,
} from "../../store/inspection/InspectionSlice";
import Loader from "../../components/Loader";
import FileUploader from "../../components/FileUploader";
import App from "../../App";
import config from "../../config";
import { ButtonLoader } from "../../components/ButtonLoader";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  const [loading, setIsLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [data, setData] = useState<InspectionType | null>(null);
  const [error, setLocalError] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { flats, users } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
    users: state.User.users,
  }));
  const params = useParams();

  useEffect(() => {
    dispatch(flatAsync()).then(() => {
      dispatch(userAsync(1)).then(() => {
        dispatch(inspectionShowAsync(params.id))
          .unwrap()
          .then((response) => {
            setData(response);
            setValue("id", response.id);
            setValue("title", response.title);
            setValue("description", response.description);
            if (typeof response.inspection_by === "number") {
              setValue("inspection_by", response.inspection_by);
            }
            setValue("flat_id", response.flat_id);
            setValue("status", response.status.toString());
            setValue("priority", response.priority.toString());
            setValue("notes", response.notes);
            setValue("inspection_date", response.inspection_date);
            setSechduleDate(new Date(response.inspection_date));
          })
          .catch((error) => setLocalError(error));
      });
    });
  }, [params.id]);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<InspectionType>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    await dispatch(inspectionUpdateAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            if (element.includes("documents")) {
              [...Array(10)].map((_, index) =>
                // @ts-ignore
                setError("documents", {
                  message: reason.errors["documents." + index].toString(),
                })
              );
            } else {
              // @ts-ignore
              setError(element, { message: reason.errors[element].toString() });
            }
          } catch (errror) {}
        }
        setIsLoading(false);
      });
  });

  const [sechduleDate, setSechduleDate] = useState<Date>(new Date());

  return (
    <>
      {toast && (
        <div className="alert alert-success">
          {toast}
          <Link to={"/inspection"}> Back to Inspection.</Link>
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
                <FormInput type="hidden" name="id" />
                <FormInput
                  label="Title"
                  type="text"
                  register={register}
                  name="title"
                  errors={errors}
                  containerClass={"mb-3"}
                  key="title"
                />
                <FormInput
                  label="Description"
                  type="textarea"
                  register={register}
                  name="description"
                  errors={errors}
                  rows="3"
                  containerClass={"mb-3"}
                  key="description"
                />
                <FormInput
                  type="hidden"
                  register={register}
                  name="inspection_date"
                  value={sechduleDate.toISOString().split("T")[0]}
                  key="inspection_date"
                />
                <div className="mb-3">
                  <label className="form-label">Inspection Date</label> <br />
                  <HyperDatepicker
                    value={sechduleDate}
                    minDate={new Date()}
                    showTimeSelect={true}
                    dateFormat="MM-dd-yyyy HH:mm"
                    onChange={(date) => {
                      setSechduleDate(date);
                      setValue("inspection_date", date.toLocaleString("sv-SE"));
                    }}
                  />
                </div>
                <Row>
                  <Form.Group className="mb-3 input-group">
                    <FormLabel className="me-2">Priority</FormLabel>
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="priority"
                      label="Low"
                      value={1}
                      register={register}
                      id={"priorty_low"}
                      key={"priorty_low"}
                      defaultChecked={true}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="priority"
                      label="Medium"
                      value={2}
                      register={register}
                      id={"priorty_medium"}
                      key={"priorty_medium"}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="priority"
                      label="High"
                      value={3}
                      register={register}
                      id={"priorty_high"}
                      key={"priorty_high"}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3 input-group">
                    <FormLabel className="me-2">Status</FormLabel>
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="status"
                      label="Open"
                      value={1}
                      id="status_open"
                      register={register}
                      key={"status_open"}
                      defaultChecked={true}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="status"
                      label="In Progress"
                      value={2}
                      id="status_progress"
                      register={register}
                      key={"status_progress"}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="status"
                      label="Close"
                      value={3}
                      id="status_close"
                      register={register}
                      key={"status_close"}
                    />
                  </Form.Group>

                  <FormInput
                    type="select"
                    label="Suite#"
                    name="flat_id"
                    containerClass="mb-3 "
                    register={register}
                    errors={errors}
                  >
                    {flats.length &&
                      flats.map((flat) => (
                        <optgroup key={`apartment${flat.id}`} label={flat.name.toString()}>
                          {flat.flats.map((aprtment) => (
                            <option key={"flat" + aprtment.id} value={aprtment.id}>
                              {aprtment.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                  </FormInput>
                  {errors && errors["flat_id"] ? (
                    <Form.Control.Feedback type="invalid">
                      {errors["flat_id"]!.message}
                    </Form.Control.Feedback>
                  ) : null}
                  <FormInput
                    type="select"
                    label="Assign To"
                    name="inspection_by"
                    containerClass="mb-3 "
                    register={register}
                    errors={errors}
                  >
                    {users ? (
                      users.data.length &&
                      users!.data.map((user) => (
                        <option key={"user" + user.user.id} value={user.user.id.toString()}>
                          {user.user.name} - {user.user.role}
                        </option>
                      ))
                    ) : (
                      <option></option>
                    )}
                  </FormInput>
                  {errors && errors["inspection_by"] ? (
                    <Form.Control.Feedback type="invalid">
                      {errors["inspection_by"]!.message}
                    </Form.Control.Feedback>
                  ) : null}

                  <FormInput
                    label="Notes"
                    type="textarea"
                    register={register}
                    name="notes"
                    errors={errors}
                    rows="3"
                    containerClass={"mb-3"}
                    key="notes"
                  />

                  <FormLabel className="">Documents</FormLabel>
                  {data?.documents.map((val) => (
                    <div>
                      <Card className="mt-1 mb-1 shadow-none border" key={val.id + "-file"}>
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="ps-0 ms-2">
                              <Link
                                to={`${config.BASE_URL}/${val.document_path}`}
                                className="text-muted fw-bold"
                                target="_blank"
                              >
                                {val.document_name}
                              </Link>
                            </Col>
                            <Col className="text-end">
                              <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                                <i
                                  className="dripicons-cross"
                                  onClick={() => {
                                    dispatch(inspectionDocumentDeleteAsync(val.id))
                                      .unwrap()
                                      .then((response) => {
                                        if (response && response.status) {
                                          dispatch(inspectionShowAsync(params.id))
                                            .unwrap()
                                            .then((response) => {
                                              setData(response);
                                            });
                                        }
                                      });
                                  }}
                                ></i>
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    </div>
                  ))}

                  <FormGroup>
                    <Controller
                      render={() => (
                        <FileUploader
                          maxFiles={10}
                          onFileUpload={(files) => {
                            setValue("documents", files);
                          }}
                        ></FileUploader>
                      )}
                      name="documents"
                      control={control}
                    />
                    {errors && errors["documents"] ? (
                      <Form.Text className="text-danger">{errors["documents"]!.message}</Form.Text>
                    ) : null}
                  </FormGroup>
                </Row>
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Create
                  </Button>
                )}
              </form>
            </Col>
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
          { label: "Maintanance Inspections", path: "/inspection" },
          { label: "Maintanance Inspection", path: "/inspection/new", active: true },
        ]}
        title={"Maintanance Inspection"}
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
