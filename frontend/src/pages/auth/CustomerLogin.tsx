import React, { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Navigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

// store
import { RootState, AppDispatch } from "../../store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthCustomerLayout from "./AuthCustomerLayout";
import { loggedInAsync } from "../../store/auth/AuthSlice";

interface UserData {
  username: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p>
          <Link to={"/auth/forget-password"} className="text-white-50 ms-1">
            {t("Forgot your password?")}
          </Link>
        </p>
        <p className="text-white-50">
          {t("Don't have an account?")}{" "}
          <Link to={"/auth/register"} className="text-white ms-1">
            <b>{t("Sign Up")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

/* social links */
const SocialLinks = () => {
  const socialLinks = [
    {
      variant: "primary",
      icon: "facebook",
    },
    {
      variant: "danger",
      icon: "google",
    },
    {
      variant: "info",
      icon: "twitter",
    },
    {
      variant: "secondary",
      icon: "github",
    },
  ];
  return (
    <>
      <ul className="social-list list-inline mt-3 mb-0">
        {(socialLinks || []).map((item, index: number) => {
          return (
            <li key={index} className="list-inline-item">
              <Link
                to="#"
                className={classNames(
                  "social-list-item",
                  "border-" + item.variant,
                  "text-" + item.variant
                )}
              >
                <i className={classNames("mdi", "mdi-" + item.icon)}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const CustomerLogin = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    loading: state.Auth.loading,
    userLoggedIn: state.Auth.userLoggedIn,
  }));

  /*
  form validation schema
  */
  const schemaResolver = yupResolver(
    yup.object().shape({
      username: yup.string().required(t("Please enter Username")),
      password: yup.string().required(t("Please enter Password")),
    })
  );

  /*
  handle form submission
  */
  const onSubmit = (formData: UserData) => {
    dispatch(loggedInAsync(formData));
  };

  const location = useLocation();
  //
  // const redirectUrl = location.state && location.state.from ? location.state.from.pathname : '/';
  const redirectUrl = location?.search?.slice(6) || "/dashboard-1";

  return (
    <>
      {(userLoggedIn || user) && <Navigate to={redirectUrl}></Navigate>}

      <AuthCustomerLayout isCombineForm={true} bottomLinks={<BottomLink />}>
        <Row>
          <Col md={8} lg={8} xl={6}>
            <div>
              <h4 className="text-center text-muted">North Park Monor</h4>
            </div>

            <div>
              <h6 className="text-center text-muted">Resident Login</h6>
            </div>
            <VerticalForm<UserData>
              onSubmit={onSubmit}
              resolver={schemaResolver}
              defaultValues={{ username: "flat", password: "flat" }}
            >
              <FormInput
                label={t("Apartment #")}
                type="text"
                name="apartment"
                placeholder="Enter Flat Number"
                containerClass={"mb-3"}
              />
              <FormInput
                label={t("Username")}
                type="text"
                name="username"
                placeholder="Enter your Username"
                containerClass={"mb-3"}
              />
              <FormInput
                label={t("Password")}
                type="password"
                name="password"
                placeholder="Enter your password"
                containerClass={"mb-3"}
              ></FormInput>

              <div className="text-center d-grid">
                <Button variant="primary" type="submit" disabled={loading}>
                  {t("Log In")}
                </Button>
              </div>
            </VerticalForm>
          </Col>

          <Col md={8} lg={8} xl={6}>
            <div>
              <h4 className="text-center text-muted">Fisgard House</h4>
            </div>

            <div>
              <h6 className="text-center text-muted">Resident Login</h6>
            </div>
            <VerticalForm<UserData>
              onSubmit={onSubmit}
              resolver={schemaResolver}
              defaultValues={{ username: "test", password: "test" }}
            >
              <FormInput
                label={t("Apartment #")}
                type="text"
                name="apartment"
                placeholder="Enter Flat Number"
                containerClass={"mb-3"}
              />
              <FormInput
                label={t("Username")}
                type="text"
                name="username"
                placeholder="Enter your Username"
                containerClass={"mb-3"}
              />
              <FormInput
                label={t("Password")}
                type="password"
                name="password"
                placeholder="Enter your password"
                containerClass={"mb-3"}
              ></FormInput>

              <div className="text-center d-grid">
                <Button variant="primary" type="submit" disabled={loading}>
                  {t("Log In")}
                </Button>
              </div>
            </VerticalForm>
          </Col>
        </Row>
        {/* <div className="text-center">
          <h5 className="mt-3 text-muted">{t("Sign in with")}</h5>
          <SocialLinks />
        </div> */}
      </AuthCustomerLayout>
    </>
  );
};

export default CustomerLogin;
