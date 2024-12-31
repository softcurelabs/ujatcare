import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col, Card, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
// components
import PageTitle from "../../components/PageTitle";
import { maintananceAddAsync } from "../../store/maintanance/MaintananceSlice";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userShowAsync } from "../../store/user/UserSlice";
import { UserProfileDataType } from "../../types/UserType";
import { FormInput } from "../../components";
import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";
import { MaintananceData } from "../../types/MaintananceType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HyperDatepicker from "../../components/Datepicker";

import { ButtonLoader } from "../../components/ButtonLoader";
const BasicInputElements = () => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      work_requested: yup.string().required("Please select Work Requested"),
      tanent_name: yup.string().required("Please enter tanent name"),
      phone: yup.string().required("Please enter phone name"),
      ok_to_enter: yup.string().required("Please select ok to enter"),
    //   tanent_signature: yup
    //     .string()
    //     .required()
    //     .matches(
    //       /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,
    //       "Signature must be png"
    //     ),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setLocalError] = useState("");
  const [localUser, setLocalUser] = useState<UserProfileDataType>();
  let { user, customerUser } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));

  if (!user) {
    user = customerUser;
  }

  const methods = useForm<MaintananceData>({
    defaultValues: {},
    resolver: schemaResolver,
  });
  const {
    handleSubmit,
    register,
    setError,
    control,
    setValue,
    reset,
    formState: { errors },
  } = methods;
  const dispatch = useDispatch<AppDispatch>();
  let signCanvas = useRef<ReactSignatureCanvas | null>(null);
  let personCanvas = useRef<ReactSignatureCanvas | null>(null);

  const formatIntoPng = () => {
    if (signCanvas.current) {
      const dataURL = signCanvas.current.toDataURL();
      return dataURL;
    }
  };

  const formatIntoPngPerson = () => {
    if (personCanvas.current) {
      const dataURL = personCanvas.current.toDataURL();
      return dataURL;
    }
  };
  const [actionDate, setActionDate] = useState(new Date());
  const [timeIn, setTimeIn] = useState(new Date());
  const [timeOut, setTimeOut] = useState(new Date());
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(userShowAsync(user.user_id))
      .unwrap()
      .then((response) => {
        setLocalUser(response);
      });
  }, [user.user_id]);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    dispatch(maintananceAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          setLocalError("");
          reset();
          signCanvas.current?.clear();
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setIsLoading(false);
        }
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
    <>
      <Card>
        <Card.Body>
          {toast && (
            <div className="alert alert-success">
              {toast}
              <Link to={"/maintanance"}> Back to Maintanance.</Link>
            </div>
          )}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}
          {localUser && (
            <form onSubmit={onSubmit}>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="me-2">Building</Form.Label>
                    <Form.Label>{localUser.user.apartment_name}</Form.Label>
                    <FormInput
                      type="hidden"
                      name="user_id"
                      value={user.user_id}
                      register={register}
                    />
                  </Form.Group>
                </Col>

                <Col lg={3}>
                  <Form.Group className="mb-3 input-group">
                    <Form.Label htmlFor="small" className="me-2">
                      Suite
                    </Form.Label>
                    <Form.Label>{localUser.user.flat_name}</Form.Label>
                    <FormInput
                      type="hidden"
                      name="flat_id"
                      value={localUser.user.flat?.flat_id}
                      register={register}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <FormInput
                    label="Tanent Name"
                    type="text"
                    register={register}
                    name="tanent_name"
                    errors={errors}
                    className="form-control-sm "
                    containerClass={"mb-3 input-group"}
                    labelClassName="me-2"
                    value={localUser.user.first_name}
                    size={2}
                    key="tanent_name"
                  />
                </Col>
                <Col lg={3}>
                  <FormInput
                    label="Phone"
                    type="text"
                    register={register}
                    name="phone"
                    errors={errors}
                    value={localUser.phone_number}
                    className="form-control-sm"
                    containerClass={"mb-3 input-group"}
                    labelClassName="me-2"
                    size={2}
                    key="phone"
                  />
                </Col>
                <Col lg={5}>
                  <Form.Group className="mb-3 input-group">
                    <Form.Label htmlFor="small" className="me-2">
                      Ok to Enter
                    </Form.Label>
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="ok_to_enter"
                      label="Yes"
                      checked={true}
                      value={1}
                      register={register}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="ok_to_enter"
                      label="No"
                      value={2}
                      register={register}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <FormInput
                    type="textarea"
                    title="Work Requested"
                    name="work_requested"
                    placeholder="Work Requested"
                    className="mb-3"
                    register={register}
                    errors={errors}
                    style={{ height: "125px" }}
                  />
                </Col>
              </Row>
              <Row className="d-none">
                <Col lg={12}>
                  <Form.Group className="mb-3 input-group">
                    <Form.Label htmlFor="small" className="me-2">
                      Action Taken
                    </Form.Label>
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="action_taken"
                      register={register}
                      value={1}
                      disabled={true}
                      label="Work Completed"
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="action_taken"
                      value={2}
                      disabled={true}
                      register={register}
                      label="Repaired Temporarily"
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="action_taken"
                      register={register}
                      value={3}
                      disabled={true}
                      label="Parts on Order"
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="action_taken"
                      register={register}
                      value={4}
                      disabled={true}
                      label="Outside Contractor Called"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="d-none">
                <Col lg={4}>
                  <FormGroup className="input-group mb-3 ">
                    <Form.Label htmlFor="small" className="me-2">
                      Date
                    </Form.Label>
                    <FormInput
                      type="hidden"
                      register={register}
                      name="action_date"
                      value={actionDate.toISOString().split("T")[0]}
                      key="action_date"
                    />
                    <HyperDatepicker
                      hideAddon={true}
                      disabled={true}
                      value={actionDate}
                      showTimeSelect={false}
                      inputClass="form-control-sm"
                      dateFormat="MM-dd-yyyy"
                      onChange={(date) => {
                        setActionDate(date);
                        setValue("action_date", date.toLocaleString("sv-SE"));
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup className="input-group mb-3 ">
                    <Form.Label htmlFor="small" className="me-2">
                      Time In
                    </Form.Label>
                    <FormInput type="hidden" register={register} name="time_in" key="time_in" />
                    <HyperDatepicker
                      value={timeIn}
                      disabled={true}
                      showTimeSelect={true}
                      showTimeSelectOnly={true}
                      inputClass="form-control-sm"
                      onChange={(date) => {
                        setTimeIn(date);
                        setValue("time_in", timeIn.toLocaleTimeString("it-IT"));
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup className="input-group mb-3 ">
                    <Form.Label htmlFor="small" className="me-2">
                      Time Out
                    </Form.Label>
                    <FormInput type="hidden" register={register} name="time_out" key="time_out" />
                    <HyperDatepicker
                      value={timeOut}
                      disabled={true}
                      showTimeSelect={true}
                      showTimeSelectOnly={true}
                      inputClass="form-control-sm"
                      onChange={(date) => {
                        setTimeIn(date);
                        setValue("time_out", timeOut.toLocaleTimeString("it-IT"));
                      }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="d-none">
                <Col lg={12}>
                  <FormInput
                    type="textarea"
                    title="Work Done"
                    name="work_done"
                    disabled={true}
                    placeholder="Work Done"
                    className="mb-3"
                    register={register}
                    errors={errors}
                    style={{ height: "125px" }}
                  />
                </Col>
              </Row>
              <Row className="d-none">
                <Col lg={12}>
                  <Form.Group className="mb-3 input-group">
                    <FormInput
                      type="radio"
                      name="chargable"
                      value={1}
                      register={register}
                      disabled={true}
                      label="Chargable to Occupant"
                      className="form-check-inline"
                    />
                    <FormInput
                      type="radio"
                      name="chargable"
                      value={2}
                      disabled={true}
                      register={register}
                      label="Management"
                      className="form-check-inline"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  )}
                </Col>
              </Row>
            </form>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

const Create = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-1" },
          {
            label: "Maintanance Create",
            path: "/maintanance/create",
            active: true,
          },
        ]}
        title={"Maintanance Request"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Create;
