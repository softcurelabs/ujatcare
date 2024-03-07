import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Row, Col, Card, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
// components
import PageTitle from "../../components/PageTitle";
import {
  maintananceEditAsync,
  maintananceShowAsync,
} from "../../store/maintanance/MaintananceSlice";
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

const BasicInputElements = () => {
  const schemaResolver = yupResolver(
    yup.object().shape({
      work_requested: yup.string().required("Please select Work Requested"),
      tanent_name: yup.string().required("Please enter tanent name"),
      phone: yup.string().required("Please enter phone name"),
      ok_to_enter: yup.string().required("Please select ok to enter"),
      tanent_signature: yup
        .string()
        .required()
        .matches(
          /^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,
          "Signature must be png"
        ),
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

  useEffect(() => {
    dispatch(userShowAsync(user.user_id))
      .unwrap()
      .then((response) => {
        setLocalUser(response);
        dispatch(maintananceShowAsync(params.id))
          .unwrap()
          .then((response) => {
            if (response === null) {
              return;
            }
            setValue("id", response.id);
            setValue("tanent_name", response?.tanent_name!);
            setValue("work_requested", response?.work_requested!);
            setValue("tanent_signature", response?.tanent_signature!);
            signCanvas.current?.fromDataURL(response?.tanent_signature);
            if (personCanvas.current) {
              personCanvas.current.fromDataURL(response?.service_signature!);
            }
            setValue("phone", response?.phone!);
            setValue("ok_to_enter", response?.ok_to_enter.toString());
            if (response?.action_taken) {
              setValue("action_taken", response?.action_taken!.toString());
            }

            // // setValue("action_date", response?.action_date);
            setValue("work_done", response?.work_done!);

            setValue("status", response?.status.toString());
            if (response?.chargable) {
              setValue("chargable", response?.chargable.toString());
            }
            // console.log(response?.action_date);
            if (response?.action_date) {
              setActionDate(new Date(response?.action_date));
            }
            if (response?.time_in) {
              setTimeIn(new Date("2024-12-12 " + response?.time_in));
            }
            if (response?.time_out) {
              setTimeIn(new Date("2024-12-12 " + response?.time_out));
            }
            if (personCanvas) {
              personCanvas.current?.off();
            }
          })
          .catch((error) => setLocalError(error));
      });
  }, [user.user_id]);

  const onSubmit = handleSubmit(async (data) => {
    dispatch(maintananceEditAsync(data))
      .unwrap()
      .then((response) => {
        console.log(response);
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
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            setError(element, { message: reason.errors[element].toString() });
          } catch (errror) {}
        }
      });
  });

  const params = useParams();

  //   const watchShowAge = watch("ok_to_enter");

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

                    <FormInput type="hidden" name="id" register={register} />
                  </Form.Group>
                </Col>

                <Col lg={3}>
                  <Form.Group className="mb-3 input-group">
                    <Form.Label htmlFor="small" className="me-2">
                      Apt
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
                      value="1"
                      register={register}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="ok_to_enter"
                      label="No"
                      value="2"
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
                    style={{ height: "100px" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <FormGroup className="mb-3">
                    <FormLabel className="me-1 ">Signature</FormLabel>
                    <Controller
                      control={control}
                      name="tanent_signature"
                      render={({ field }) => (
                        <SignaturePad
                          ref={signCanvas}
                          onEnd={() => field.onChange(formatIntoPng())}
                          penColor="green"
                          canvasProps={{
                            width: 500,
                            height: 50,
                            style: { border: "1px solid green" },
                          }}
                        />
                      )}
                    />
                    <FormInput
                      name="tanent_signature"
                      register={register}
                      errors={errors}
                      className="is-invalid"
                      type="hidden"
                    />
                    {errors && errors["tanent_signature"] ? (
                      <Form.Control.Feedback type="invalid">
                        {errors["tanent_signature"]!.message}
                      </Form.Control.Feedback>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
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
              <Row>
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
                      dateFormat="MM-DD-YYYY"
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
              <Row>
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
              <Row>
                <Col lg={12}>
                  <FormGroup className="mb-3">
                    <FormLabel className="me-1 ">Service Person Signature</FormLabel>
                    <Controller
                      control={control}
                      name="service_signature"
                      render={({ field }) => (
                        <SignaturePad
                          ref={personCanvas}
                          onEnd={() => field.onChange(formatIntoPngPerson())}
                          penColor="green"
                          canvasProps={{
                            width: 500,
                            height: 50,
                            style: { border: "1px solid green" },
                          }}
                        />
                      )}
                    />
                    <FormInput
                      name="service_signature"
                      register={register}
                      errors={errors}
                      className="is-invalid"
                      type="hidden"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
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
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </form>
          )}
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
export default Edit;
