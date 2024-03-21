import React, { useEffect, useState } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";
import { AppDispatch } from "../../store";
import { ResetPasswordType } from "../../types/ResetPasswordType";
import { resetPasswordAsync } from "../../store/auth/AuthSlice";
import { ButtonLoader } from "../../components/ButtonLoader";

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

const ResetPassword = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  // useEffect(() => {
  //   dispatch(resetAuth());
  // }, [dispatch]);

  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().email().required(t("Please enter email")),
      password: yup
        .string()
        .required("Please enter your password.")
        .min(8, "Your password is too short."),
      password_confirmation: yup
        .string()
        .required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match."),
      //   password_confirmation: yup.mat
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: ResetPasswordType) => {
    setToast("");
    setError("");
    setIsLoading(true);
    dispatch(resetPasswordAsync(formData))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        setError(reason.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}

        {
          <VerticalForm
            onSubmit={onSubmit}
            resolver={schemaResolver}
            defaultValues={{ token: params.token }}
          >
            <FormInput
              label={t("Email")}
              type="text"
              name="email"
              placeholder={t("Enter your email")}
              containerClass={"mb-3"}
            />
            <FormInput
              label={t("Password")}
              type="password"
              name="password"
              placeholder={t("Enter password")}
              containerClass={"mb-3"}
            />
            <FormInput
              label={t("Confirm Password")}
              type="password"
              name="password_confirmation"
              placeholder={t("Enter confirm password")}
              containerClass={"mb-3"}
            />
            <FormInput type="hidden" name="token" />

            <div className="d-grid text-center">
              {loading ? (
                <ButtonLoader />
              ) : (
                <Button variant="primary" type="submit">
                  {t("Reset Password")}
                </Button>
              )}
            </div>
          </VerticalForm>
        }
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
