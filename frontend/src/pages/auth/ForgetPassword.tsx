import React, { useEffect, useState } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";
import { AppDispatch } from "../../store";
import { forgotPasswordAsync } from "../../store/auth/AuthSlice";

interface UserData {
  email: string;
}

/* bottom link */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Back to")}{" "}
          <Link to={"/auth/login"} className="text-white ms-1">
            <b>{t("Log in")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const ForgetPassword = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  // useEffect(() => {
  //   dispatch(resetAuth());
  // }, [dispatch]);

  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().email().required(t("Please enter email")),
    }),
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    console.log(formData);
    // dispatch(forgotPassword(formData["username"]));
    dispatch(forgotPasswordAsync(formData.email))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
        }
      })
      .catch((reason) => {
        setError(reason.message);
      });
  };

  return (
    <>
      <AuthLayout
        helpText={t(
          "Enter your email address and we'll send you an email with instructions to reset your password.",
        )}
        bottomLinks={<BottomLink />}
      >
        {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {
          <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
            <FormInput
              label={t("Email")}
              type="text"
              name="email"
              placeholder={t("Enter your email")}
              containerClass={"mb-3"}
            />

            <div className="d-grid text-center">
              <Button variant="primary" type="submit">
                {t("Reset Password")}
              </Button>
            </div>
          </VerticalForm>
        }
      </AuthLayout>
    </>
  );
};

export default ForgetPassword;
