import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";
import FileUploader from "../../components/FileUploader";
import HyperDatepicker from "../../components/Datepicker";
import { useNavigate, useParams } from "react-router-dom";
import { UserEditType, UserPermissionType, UserProfileType } from "../../types/UserType";
import { userEditAsync, userPermissionAsync, userShowAsync } from "../../store/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { flatAsync } from "../../store/flat/FlatSlice";
import { ResetPassword } from "./ResetPassword";
import { UploadImage } from "./UploadImage";

interface Colors {
  variant: string;
  name: string;
}

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
  const { flats } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
  }));

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
  } = useForm<UserPermissionType>({
    defaultValues: {},
    resolver: schemaResolver,
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(userPermissionAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
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
        dispatch(userShowAsync(params.id))
          .unwrap()
          .then((response) => {
            setValue("id", response.user.id);
            setValue("email", response.user.email);
            if (response.user.flat) {
              setValue("flat_id", response.user.flat.flat_id);
            }
            setValue("role_id", response.user.role);
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
                  <FormInput
                    label="Email"
                    type="email"
                    register={register}
                    name="email"
                    placeholder="Email"
                    containerClass={"mb-3"}
                    disabled={true}
                  />
                  <FormInput
                    type="select"
                    label="Role"
                    name="role_id"
                    containerClass="mb-3"
                    register={register}
                    errors={errors}
                  >
                    <option value="">Select Role</option>
                    <option value="renter">Renter</option>
                    <option value="admin">Admin</option>
                  </FormInput>

                  <FormInput
                    type="select"
                    label="Apartment#"
                    name="flat_id"
                    containerClass="mb-3"
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
                </fieldset>
                <Button
                  onClick={() => navigate(-1)}
                  variant="primary"
                  className="me-2"
                  type="submit"
                >
                  Back
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const AssignPermission = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Users", path: "/user" },
          { label: "Assign Permission", path: "/user", active: true },
        ]}
        title={"Assign Permission"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default AssignPermission;