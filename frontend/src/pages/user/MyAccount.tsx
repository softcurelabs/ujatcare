import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, FormLabel } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";
import HyperDatepicker from "../../components/Datepicker";
import { Form, useNavigate, useParams } from "react-router-dom";
import { UserEditType, UserProfileType } from "../../types/UserType";
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

const BasicInputElements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
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

  if (!user) {
    user = customerUser;
  }
  //   console.log(user);

  /*
   * form methods
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [disabled, setDisabled] = useState<boolean>(true);
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
  useEffect(() => {
    dispatch(flatAsync())
      .unwrap()
      .then(() => {
        dispatch(userShowAsync(user.user_id))
          .unwrap()
          .then((response) => {
            setValue("id", response.user.id);
            setValue("unit", response.unit);
            setValue("name", response.user.name);
            setValue("email", response.user.email);
            setValue("phone_number", response.phone_number);
            if (response.user.flat) {
              setValue("flat_id", response.user.flat.flat_id);
            }
            setValue("parking_space", response.parking_space);
            setValue(
              "emergency_contact_number",
              response.emergency_contact_number
            );
            setValue("emergency_contact_name", response.emergency_contact_name);
            setValue("income_verification", response.income_verification);
            setValue("rent_calculation", response.rent_calculation);
            setValue("special_instruction", response.special_instruction);
            setValue("relationship", response.relationship);
            setValue("movein_date", response.movein_date);
            // setSelectedDate(new Date(response.movein_date));
          })
          .catch((error) => setNewError(error.message));
      });
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          {toast && <div className="alert alert-success">{toast}</div>}
          {error && (
            <div className="alert alert-danger mt-3" role="alert">
              {error}
            </div>
          )}

          <Row>
            <Col lg={6}>
              <form
                onSubmit={onSubmit}
                className={disabled ? "form-readonly" : ""}
              >
                <fieldset>
                  <FormInput
                    label="Emergency Contact"
                    type="text"
                    name="emergency_contact_number"
                    placeholder="Emergency Contact Number"
                    containerClass={"mb-3"}
                    register={register}
                    key="emergency_contact_number"
                    errors={errors}
                  />
                  <FormInput
                    label="Emergency Contact Name"
                    type="text"
                    name="emergency_contact_name"
                    placeholder="Emergency Contact Name"
                    containerClass={"mb-3"}
                    register={register}
                    key="emergency_contact_name"
                    errors={errors}
                  />
                  <FormInput
                    label="Name"
                    type="text"
                    name="name"
                    containerClass={"mb-3"}
                    register={register}
                    key="name"
                    errors={errors}
                  />
                  <FormInput
                    label="Phone#"
                    type="text"
                    name="phone_number"
                    placeholder="phone_number"
                    containerClass={"mb-3"}
                    register={register}
                    key="phone_number"
                    errors={errors}
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    containerClass={"mb-3"}
                    register={register}
                    key="email"
                    errors={errors}
                    disabled={true}
                  />
                  <FormInput
                    label="Unit"
                    type="text"
                    name="unit"
                    placeholder="Unit"
                    containerClass={"mb-3"}
                    register={register}
                    key="unit"
                    errors={errors}
                  />
                  <FormInput
                    label="Relationship"
                    type="text"
                    name="relationship"
                    placeholder="relationship"
                    containerClass={"mb-3"}
                    register={register}
                    key="relationship"
                    errors={errors}
                  />

                  <FormInput
                    type="select"
                    label="Apartment#"
                    name="flat_id"
                    containerClass="mb-3"
                    register={register}
                    disabled={true}
                    errors={errors}
                  >
                    {flats.length &&
                      flats.map((flat) => (
                        <optgroup
                          key={`apartment${flat.id}`}
                          label={flat.name.toString()}
                        >
                          {flat.flats.map((aprtment) => (
                            <option
                              key={"flat" + aprtment.id}
                              value={aprtment.id}
                            >
                              {aprtment.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                  </FormInput>

                  <FormInput
                    label="Parking Space"
                    type="text"
                    name="parking"
                    placeholder="Parking"
                    containerClass={"mb-3"}
                    register={register}
                    key="parking"
                    errors={errors}
                  />

                  <FormInput
                    label="Income Verification"
                    type="text"
                    name="income_verification"
                    placeholder="Contact"
                    containerClass={"mb-3"}
                    register={register}
                    key="income_verification"
                    errors={errors}
                  />
                  <FormInput
                    label="Rent Calculation"
                    type="text"
                    name="rent_calculation"
                    placeholder="Rent"
                    containerClass={"mb-3"}
                    register={register}
                    key="rent_calculation"
                    errors={errors}
                  />

                  <FormInput
                    label="Language"
                    type="text"
                    name="language"
                    placeholder="Language"
                    containerClass={"mb-3"}
                    register={register}
                    key="language"
                    errors={errors}
                  />

                  <FormInput
                    label="Special information"
                    type="textarea"
                    name="special_instruction"
                    rows="5"
                    containerClass={"mb-3"}
                    register={register}
                    key="special_instruction"
                    errors={errors}
                  />
                  <FormInput
                    type="hidden"
                    register={register}
                    name="movein_date"
                    key="movein_date"
                  />

                  <div className="mb-3">
                    <label className="form-label">Move In Date</label> <br />
                    <HyperDatepicker
                      hideAddon={true}
                      showTimeSelect={false}
                      // maxDate={new Date()}
                      value={selectedDate}
                      onChange={(date) => {
                        onDateChange(date);
                        setValue("movein_date", date.toLocaleString("sv-SE"));
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Birth Date</label> <br />
                    <HyperDatepicker
                      hideAddon={true}
                      showTimeSelect={false}
                      showTimeSelectOnly={false}
                      // maxDate={new Date()}
                      value={selectedDate}
                      onChange={(date) => {}}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <FormLabel htmlFor="small" className="me-2">
                      I am
                    </FormLabel>
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="confidential"
                      label="Handicapped"
                      value="1"
                      register={register}
                    />
                    <FormInput
                      type="radio"
                      className="form-check-inline"
                      name="confidential"
                      label="Diabetes"
                      value="2"
                      register={register}
                    />
                  </div>
                  {user.user_role.includes("admin") && (
                    <FormInput
                      label="Staff Note"
                      type="textarea"
                      name="staff_notes"
                      rows="5"
                      containerClass={"mb-3"}
                      register={register}
                      key="staff_notes"
                      errors={errors}
                    />
                  )}
                </fieldset>

                <Button
                  onClick={() => navigate(-1)}
                  variant="primary"
                  className="me-2"
                  type="submit"
                >
                  Back
                </Button>
                {!disabled ? (
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                ) : (
                  <div />
                )}
              </form>
            </Col>

            <Col lg={6}>
              <div className="text-end pb-2">
                {disabled ? (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setDisabled(false)}
                  >
                    Edit
                  </Button>
                ) : (
                  <div></div>
                )}
              </div>

              <div>
                <UploadImage id={user.user_id} />
              </div>

              <div className="pt-2">
                <ResetPassword id={user.user_id} />
              </div>
              <div className="pt-2">
                <Documents id={user.user_id} />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
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
