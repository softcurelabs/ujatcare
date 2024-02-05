import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput, VerticalForm } from "../../components";
import HyperDatepicker from "../../components/Datepicker";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { NoticeData } from "../../types/NoticeType";
import { noticeAddAsync } from "../../store/notice/NoticeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { flatAsync } from "../../store/flat/FlatSlice";
import { UserData } from "../../types/UserType";
import { userAddAsync } from "../../store/user/UserSlice";

const BasicInputElements = () => {
  const { t } = useTranslation();
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(t("Please select name")),
      email: yup.string().required(t("Please select name")).email(t("Please valid Email")),
      role_id: yup.string().required(t("Please select role")),
    })
  );
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
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
    setValue,
    reset,
    formState: { errors },
  } = useForm<UserData>({ defaultValues: {}, resolver: schemaResolver });
  const onSubmit = handleSubmit(async (data) => {
    dispatch(userAddAsync(data))
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
                  label="Name"
                  type="text"
                  register={register}
                  name="name"
                  errors={errors}
                  rows="5"
                  containerClass={"mb-3"}
                  key="name"
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
                <Button variant="primary" type="submit">
                  Create User
                </Button>
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
          { label: "Notices", path: "/notice" },
          { label: "Notice", path: "/notice/new", active: true },
        ]}
        title={"Notice"}
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