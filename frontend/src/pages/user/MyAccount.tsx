import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, CardBody, Form } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";
import HyperDatepicker from "../../components/Datepicker";
import { useNavigate } from "react-router-dom";
import { UserEditType } from "../../types/UserType";
import { userEditAsync, userShowAsync } from "../../store/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { flatAsync } from "../../store/flat/FlatSlice";
import { ResetPassword } from "./ResetPassword";
import { UploadImage } from "./UploadImage";
import { Documents } from "./Documents";
import config from "../../config";
import { ButtonLoader } from "../../components/ButtonLoader";

const BasicInputElements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
  const [localUser, setLocalUser] = useState<UserEditType>();
  const [error, setNewError] = useState("");
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  let { flats, user, customerUser } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
    user: state.Auth.user,
    customerUser: state.CustomerAuth.user,
  }));
  const [profilePic, setProfilePic] = useState<null | string>(null);

  if (!user) {
    user = customerUser;
  }
  //   console.log(user);

  /*
   * form methods
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UserEditType>({
    defaultValues: {
      unit: 10,
      phone_number: "9601277532",
      parking_space: 120,
      emergency_contact_number: "9601277532",
      emergency_contact_name: "jasmin",
      income_verification: 230,
      rent_calculation: 123,
      language: "eng",
      special_instruction: null,
    },
    resolver: schemaResolver,
  });
  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    dispatch(userEditAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          //   reset();
        }
        setIsLoading(false);
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
  useEffect(() => {
    dispatch(flatAsync())
      .unwrap()
      .then(() => {
        dispatch(userShowAsync(user.user_id))
          .unwrap()
          .then((response) => {
            setLocalUser(response);
            if (config.BASE_URL && response.image_path)
              setProfilePic(`${config.BASE_URL}/${response.image_path}`);
            setValue("id", response.user.id);
            setValue("unit", response.unit);
            setValue("name", response.user.name);
            setValue("email", response.user.email);
            setValue("phone_number", response.phone_number);
            if (response.user.flat) {
              setValue("flat_id", response.user.flat.flat_id);
            }
            setValue("parking_space", response.parking_space);
            setValue("locker", response.locker);
            setValue("emergency_contact_number", response.emergency_contact_number);
            setValue("emergency_contact_name", response.emergency_contact_name);
            setValue("income_verification", response.income_verification);
            setValue("rent_calculation", response.rent_calculation);
            setValue("special_instruction", response.special_instruction);
            setValue("relationship", response.relationship);
            setValue("birth_date", response.birth_date);
            setValue("movein_date", response.movein_date);
            //console.log(response.movein_date);
            setSelectedDate(new Date(response.movein_date));
            setBirthDate(new Date(response.birth_date));
          })
          .catch((error) => setNewError(error.message));
      });
  }, []);

  return (
    <>
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      <Row className="gutters">
        <Col lg={3} xl={3} md={12}>
          <Card>
            {" "}
            {localUser && (
              <CardBody>
                <div className="text-center">
                  {profilePic && (
                    <img src={profilePic} className="rounded-4" alt="{}" width={125} />
                  )}
                  <h5 className="text-dark">{localUser?.user.name}</h5>
                  <h6 className="text-muted">{localUser?.user.email}</h6>
                </div>

                <UploadImage id={localUser?.user.id.toString()} />

                <div className="mt-4">
                  <ResetPassword email={localUser?.user.email.toString()} />
                </div>
                <div className="mt-2">
                  <Documents id={localUser?.user.id.toString()} />
                </div>
              </CardBody>
            )}
          </Card>
        </Col>

        <Col lg={9} xl={9} md={12}>
          <Card>
            <CardBody>
              <form onSubmit={onSubmit}>
                <Row className="gutters">
                  <Col xl={12}>
                    <h5 className="text-primary">Personal information</h5>
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Name"
                      type="text"
                      name="name"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3"}
                      register={register}
                      key="name"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Phone#"
                      type="text"
                      name="phone_number"
                      placeholder="phone_number"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="phone_number"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3"}
                      register={register}
                      key="email"
                      errors={errors}
                      disabled={true}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      type="hidden"
                      register={register}
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 input-group"}
                      labelClassName="me-2"
                      name="birth_date"
                      key="birth_date"
                    />

                    <div className="mb-3">
                      <label className="form-label">Birth Date</label> <br />
                      <HyperDatepicker
                        hideAddon={true}
                        showTimeSelect={false}
                        maxDate={new Date()}
                        value={birthDate}
                        disabled={disabled}
                        onChange={(date) => {
                          setBirthDate(date);
                          setValue("birth_date", date.toLocaleString("sv-SE"));
                        }}
                      />
                      {errors && errors["birth_date"] ? (
                        <Form.Control.Feedback type="invalid">
                          {errors["birth_date"]!.message}
                        </Form.Control.Feedback>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row className="gutters border border-success rounded">
                  <Col xl={12}>
                    <h5 className="text-primary">Emergency information</h5>
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Emergency Contact"
                      type="text"
                      name="emergency_contact_number"
                      placeholder="Emergency Contact Number"
                      className="form-control-sm fs-5"
                      containerClass={"mb-3"}
                      register={register}
                      key="emergency_contact_number"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Emergency Contact Name"
                      type="text"
                      name="emergency_contact_name"
                      placeholder="Emergency Contact Name"
                      className="form-control-sm fs-5"
                      containerClass={"mb-3 "}
                      register={register}
                      key="emergency_contact_name"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Relationship"
                      type="text"
                      name="relationship"
                      placeholder="relationship"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="relationship"
                      errors={errors}
                    />
                  </Col>
                </Row>
                <Row className="gutters">
                  <Col xl={12}>
                    <h5 className="text-primary">Tenant information</h5>
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Unit"
                      type="text"
                      name="unit"
                      placeholder="Unit"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="unit"
                      disabled={true}
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      type="select"
                      label="Apartment#"
                      name="flat_id"
                      disabled={true}
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
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
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Parking Space"
                      type="text"
                      name="parking_space"
                      placeholder="Parking"
                      disabled={true}
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3"}
                      register={register}
                      key="parking_space"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Locker#"
                      type="text"
                      name="locker"
                      disabled={true}
                      placeholder="Locker"
                      className="form-control-sm fs-5"
                      containerClass={"mb-3"}
                      register={register}
                      key="locker"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Income Verification"
                      type="text"
                      name="income_verification"
                      disabled={true}
                      placeholder="Contact"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="income_verification"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Rent Calculation"
                      type="text"
                      name="rent_calculation"
                      disabled={true}
                      placeholder="Rent"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="rent_calculation"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Language"
                      type="text"
                      name="language"
                      disabled={true}
                      placeholder="Language"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="language"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="FOB"
                      type="text"
                      name="fob"
                      disabled={true}
                      placeholder="FOB"
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 "}
                      register={register}
                      key="fob"
                      errors={errors}
                    />
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      type="hidden"
                      register={register}
                      disabled={true}
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3 input-group"}
                      labelClassName="me-2"
                      name="movein_date"
                      key="movein_date"
                    />

                    <div className="mb-3">
                      <label className="form-label">Move In Date</label> <br />
                      <HyperDatepicker
                        hideAddon={true}
                        disabled={true}
                        showTimeSelect={false}
                        // maxDate={new Date()}
                        value={selectedDate}
                        onChange={(date) => {
                          onDateChange(date);
                          setValue("movein_date", date.toLocaleString("sv-SE"));
                        }}
                      />
                      {errors && errors["movein_date"] ? (
                        <Form.Control.Feedback type="invalid">
                          {errors["movein_date"]!.message}
                        </Form.Control.Feedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col xl={6}>
                    <FormInput
                      label="Special information"
                      type="textarea"
                      name="special_instruction"
                      rows="5"
                      disabled={true}
                      className="form-control-sm fs-5 "
                      containerClass={"mb-3"}
                      register={register}
                      key="special_instruction"
                      errors={errors}
                    />
                  </Col>
                </Row>
                <Button
                  onClick={() => navigate(-1)}
                  variant="primary"
                  className="me-2"
                  type="submit"
                >
                  Back
                </Button>
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                )}
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const MyAccount = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Users", path: "/user" },
          { label: "My Account", path: "/user", active: true },
        ]}
        title={"My Account"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default MyAccount;
