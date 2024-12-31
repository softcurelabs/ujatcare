import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button, CardBody, Form, Tab, Tabs } from "react-bootstrap";
// import parseISO from "date-fns/parseISO";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";
import HyperDatepicker from "../../components/Datepicker";
import { useNavigate, useParams } from "react-router-dom";
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
import config from "../../config";
import { ButtonLoader } from "../../components/ButtonLoader";
import { Documents } from "./Documents";

const BasicInputElements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );
  const { flats } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
  }));

  /*
   * form methods
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [profilePic, setProfilePic] = useState<null | string>(null);
  const [user, setUser] = useState<UserEditType>();
  const navigate = useNavigate();
  const params = useParams();
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
    watch,
    formState: { errors },
  } = useForm<UserEditType>({
    defaultValues: {
      unit: 10,
      phone_number: "9601277532",
      parking_space: 120,
      emergency_contact_number: "9601277532",
      emergency_contact_name: "jasmin",
      income_verification: 230,
      total_rent: 123,
      language: "eng",
      special_instruction: null,
    },
    resolver: schemaResolver,
  });
  const apartment_id = watch('apartment_id');
  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    dispatch(userEditAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          //   reset();
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
        dispatch(userShowAsync(params.id))
          .unwrap()
          .then((response) => {
            setUser(response);
            if (config.BASE_URL && response.image_path)
              setProfilePic(`${config.BASE_URL}/${response.image_path}`);
            setValue("id", response.user.id);
            setValue("unit", response.unit);
            
            setValue("first_name", response.user.first_name);
            setValue("last_name", response.user.last_name);
            setValue("email", response.user.email);
            setValue("phone_number", response.phone_number);
            
            setValue("parking_space", response.parking_space);
            setValue("locker", response.locker);
            setValue("emergency_contact_number", response.emergency_contact_number);
            setValue("emergency_contact_name", response.emergency_contact_name);
            setValue("income_verification", response.income_verification);
            setValue("total_rent", response.total_rent);
            setValue("special_instruction", response.special_instruction);
            setValue("relationship", response.relationship);
            setValue("birth_date", response.birth_date);
            setValue("staff_notes", response.staff_notes);
            setValue("fob", response.fob);
            setValue("movein_date", response.movein_date);
            setValue('emergency_contact_email', response.emergency_contact_email);
            setValue('base_rent', response.base_rent);
            setValue('utilities', response.utilities);
            setValue('maintenance_fees', response.maintenance_fees);
            setValue('property_taxes', response.property_taxes);
            setValue('rental_insurance', response.rental_insurance);
            setValue('parking_fees', response.parking_fees);
            setValue('service_fees', response.service_fees);
            setValue('administrative_fees', response.administrative_fees);
            setValue('storage_fees', response.storage_fees);
            setValue('cable_fees', response.cable_fees);
            setValue('wifi', response.wifi);
            setValue('floor_plan', response.floor_plan)
            //console.log(response.movein_date);
            setSelectedDate(new Date(response.movein_date));
            setBirthDate(new Date(response.birth_date));
            if (response.user.apartment_id) {
                setValue("apartment_id", response.user.apartment_id);
            }
            if (response.user.flat) {
                setValue("flat_id", response.user.flat.flat_id);
            }
          })
          .catch((error) => setNewError(error));
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
            <CardBody>
              <div className="text-center">
                {profilePic && <img src={profilePic} className="rounded-4" alt="{}" width={125} />}
                <h5 className="text-dark">{user?.user.name}</h5>
                <h6 className="text-muted">{user?.user.email}</h6>
              </div>

              <UploadImage id={params.id} />

              <div className="mt-4">{user && user.user && <ResetPassword email={user?.user.email} />}</div>
              <div className="mt-2">
                <Documents id={params.id} />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={9} xl={9} md={12}>
          <Card>
            <CardBody>
              <form onSubmit={onSubmit}>
                <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3">
                  <Tab eventKey="profile" title="Profile">
                    <Row className="gutters">
                      <Col xl={12}>
                        <h5 className="text-primary">Personal information</h5>
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="First Name"
                          type="text"
                          name="first_name"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3"}
                          register={register}
                          key="first_name"
                          errors={errors}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Last Name"
                          type="text"
                          name="last_name"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3"}
                          register={register}
                          key="last_name"
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
                          className="form-control-sm fs-5 col-xl-8"
                          containerClass={"mb-3"}
                          register={register}
                          key="email"
                          errors={errors}
                        //   disabled={true}
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
                    <Row className="gutters border border-success rounded mb-3">
                      <Col xl={12}>
                        <h5 className="text-primary">Emergency information</h5>
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Mobile Number"
                          type="text"
                          name="emergency_contact_number"
                          placeholder="Mobile Number"
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
                      <Col xl={6}>
                        <FormInput
                          label="Emergency Contact Email"
                          type="text"
                          name="emergency_contact_email"
                          placeholder="Email"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 "}
                          register={register}
                          key="emergency_contact_email"
                          errors={errors}
                        />
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="rent" title="Rents">
                    <Row className="gutters">
                      <Col xl={12}>
                        <h5 className="text-primary">Tenant information</h5>
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Floorplan"
                          type="text"
                          name="floor_plan"
                          placeholder="Floorplan"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 "}
                          register={register}
                          key="floor_plan"
                          errors={errors}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          type="select"
                          label="Property"
                          name="apartment_id"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 "}
                          register={register}
                          errors={errors}
                        >
                          {flats.length &&
                            flats.map((flat) => (
                              <option key={`apartment${flat.id}`} value={flat.id}>
                                {flat.name.toString()}
                              </option>
                            ))}
                        </FormInput>
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          type="select"
                          label="Suite"
                          name="flat_id"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 "}
                          register={register}
                          errors={errors}
                        >
                          {user && flats.length &&
                            flats.map((flat) => 
                                ((apartment_id == flat.id) ?
                                <>{flat.flats.map((aprtment) => (
                                    ((user.user.flat && user.user.flat.flat_id == aprtment.id)) ?
                                  <option key={"flat" + aprtment.id} value={aprtment.id} selected>
                                    {aprtment.name}
                                  </option>
                                  : <option key={"flat" + aprtment.id} value={aprtment.id} disabled={aprtment.has_occupied}>
                                  {aprtment.name}
                                </option>
                                ))}</>: <></>)
                            )}
                        </FormInput>
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Parking Space"
                          type="text"
                          name="parking_space"
                          placeholder="Parking"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3"}
                          register={register}
                          key="parking_space"
                          errors={errors}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Locker"
                          type="text"
                          name="locker"
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
                          label="Monthly Income"
                          type="text"
                          name="income_verification"
                          placeholder="Monthly Income"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="income_verification"
                          prefix="$"
                          errors={errors}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Total Rent"
                          type="text"
                          name="total_rent"
                          placeholder="Rent"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="total_rent"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Language"
                          type="text"
                          name="language"
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
                          label="FOB ID"
                          type="text"
                          name="fob"
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
                          label="Base Rent"
                          type="text"
                          name="base_rent"
                          placeholder="Base Rent"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="base_rent"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Utilities"
                          type="text"
                          name="utilities"
                          placeholder="Utilities"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="utilities"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Maintenance Fees"
                          type="text"
                          name="maintenance_fees"
                          placeholder="Maintenance Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="maintenance_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Property Taxes"
                          type="text"
                          name="property_taxes"
                          placeholder="Property Taxes"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="property_taxes"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Rental Insurance"
                          type="text"
                          name="rental_insurance"
                          placeholder="Rental Insurance"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="rental_insurance"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Parking Fees"
                          type="text"
                          name="parking_fees"
                          placeholder="Parking Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="parking_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Service Fees"
                          type="text"
                          name="service_fees"
                          placeholder="Service Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="service_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Administrative Fees"
                          type="text"
                          name="administrative_fees"
                          placeholder="Administrative Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="administrative_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Storage Fees"
                          type="text"
                          name="storage_fees"
                          placeholder="Storage Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="storage_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Cable Fees"
                          type="text"
                          name="cable_fees"
                          placeholder="Cable Fees"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="cable_fees"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="WIFI"
                          type="text"
                          name="wifi"
                          placeholder="WIFI"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3 input-group"}
                          labelClassName={"d-block w-100"}
                          register={register}
                          key="wifi"
                          errors={errors}
                          prefix="$"
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Special information"
                          type="textarea"
                          name="special_instruction"
                          rows="5"
                          className="form-control-sm fs-5 "
                          containerClass={"mb-3"}
                          register={register}
                          key="special_instruction"
                          errors={errors}
                        />
                      </Col>
                      <Col xl={6}>
                        <FormInput
                          label="Staff Note"
                          type="textarea"
                          name="staff_notes"
                          rows="5"
                          className="form-control-sm fs-5"
                          containerClass={"mb-3"}
                          register={register}
                          key="staff_notes"
                          errors={errors}
                        />
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>

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

const EditUser = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Tenants", path: "/user" },
          { label: "My Account", path: "/user", active: true },
        ]}
        title={"My Account"}
      />

      <Row>
        <Col>
          <BasicInputElements key={'user-profile'} />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default EditUser;
