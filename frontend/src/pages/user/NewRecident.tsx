import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { flatAsync } from "../../store/flat/FlatSlice";
import { UserData } from "../../types/UserType";
import { userAddAsync } from "../../store/user/UserSlice";
import { ButtonLoader } from "../../components/ButtonLoader";
import { FlatType } from "../../types/FlatType";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      first_name: yup.string().required(t("Please select First Name")),
      last_name: yup.string().required(t("Please select Last Name")),
      email: yup.string().required(t("Please select name")).email(t("Please valid Email")),
      role_id: yup.string().required(t("Please select role")),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { flats } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
  }));
  useEffect(() => {
    dispatch(flatAsync());
  }, []);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<UserData>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    dispatch(userAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
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
  const apartment_id = watch('apartment_id');
  let options: Array<FlatType> = [];
  if (apartment_id && flats.length) {
    for(let i=0 ; i< flats.length;i++) {
      if (apartment_id == flats[i].id) {
        options = flats[i].flats;
        break;
      }
    }
  }

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
                  label="First Name"
                  type="text"
                  register={register}
                  name="first_name"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="first_name"
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  register={register}
                  name="last_name"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="last_name"
                />
                <FormInput
                  label="Email"
                  type="text"
                  register={register}
                  name="email"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="email"
                />
                <FormInput type="hidden" name="role_id" register={register} errors={errors} value='recident' />
                <FormInput
                  type="select"
                  label="Building#"
                  name="apartment_id"
                  containerClass="mb-3"
                  register={register}
                  errors={errors}
                >
                  <option value={""}>Select Building</option>
                  {flats.length &&
                    flats.map((flat) => (
                      <option key={`apartment${flat.id}`}  value={flat.id}>
                        {flat.name.toString()}
                      </option>
                    ))}
                </FormInput>
                <FormInput
                  type="select"
                  label="Suite#"
                  name="flat_id"
                  containerClass="mb-3"
                  register={register}
                  errors={errors}
                >
                  <option value={""}>Select Flat</option>
                  {options.length &&
                    options.map((aprtment) => (
                      aprtment.has_occupied ? (
                        <option key={"flat" + aprtment.id} value={aprtment.id} disabled>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      ) : (
                        <option key={"flat" + aprtment.id} value={aprtment.id}>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      )
                    ))}
                </FormInput>
                {loading ? (
                  <ButtonLoader />
                ) : (
                  <Button variant="primary" type="submit">
                    Create User
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

const NewUser = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-2" },
          { label: "Tenants", path: "/resident" },
          { label: "Tenant", path: "/notice/new", active: true },
        ]}
        title={"Tenant"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default NewUser;
