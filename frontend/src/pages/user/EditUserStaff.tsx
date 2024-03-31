import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button } from "react-bootstrap";

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

const BasicInputElements = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
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
  const [profilePic, setProfilePic] = useState<null | string>(null);

  /*
   * form methods
   */
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [disabled, setDisabled] = useState<boolean>(true);
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
            setValue("emergency_contact_number", response.emergency_contact_number);
            setValue("emergency_contact_name", response.emergency_contact_name);
            setValue("income_verification", response.income_verification);
            setValue("rent_calculation", response.rent_calculation);
            setValue("special_instruction", response.special_instruction);
            setValue("relationship", response.relationship);
            setValue("movein_date", response.movein_date);
          })
          .catch((error) => setNewError(error));
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
              <form onSubmit={onSubmit} className={disabled ? "form-readonly" : ""}>
                <fieldset>
                  {/* <FormInput
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
                  /> */}
                  <FormInput
                    label="Name"
                    type="text"
                    name="name"
                    className="form-control-sm "
                    containerClass={"mb-3 input-group"}
                    labelClassName="me-2"
                    register={register}
                    key="name"
                    errors={errors}
                  />
                  <FormInput
                    label="Phone#"
                    type="text"
                    name="phone_number"
                    placeholder="phone_number"
                    className="form-control-sm "
                    containerClass={"mb-3 input-group"}
                    labelClassName="me-2"
                    register={register}
                    key="phone_number"
                    errors={errors}
                  />

                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control-sm "
                    containerClass={"mb-3 input-group"}
                    labelClassName="me-2"
                    register={register}
                    key="email"
                    errors={errors}
                    disabled={true}
                  />
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
                  loading ? (
                    <ButtonLoader />
                  ) : (
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  )
                ) : (
                  <div />
                )}
              </form>
            </Col>

            <Col lg={6}>
              <div className="text-center">
                {profilePic && <img src={profilePic} className="rounded-4" alt="{}" width={125} />}
              </div>
              <div className="text-end pb-2">
                {disabled ? (
                  <Button variant="primary" type="submit" onClick={() => setDisabled(false)}>
                    Edit
                  </Button>
                ) : (
                  <div></div>
                )}
              </div>

              <UploadImage id={params.id} />

              <div className="pt-5">
                <ResetPassword id={params.id} />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const EditUser = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Residents", path: "/user" },
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
export default EditUser;
