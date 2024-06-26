import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

//actions
// components
import AuthLayout from "./AuthLayout";
import { logoutAsync } from "../../store/auth/AuthSlice";
import { AppDispatch } from "../../store";

const LogoutIcon = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      {" "}
      <circle
        className="path circle"
        fill="none"
        stroke="#4bd396"
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />{" "}
      <polyline
        className="path check"
        fill="none"
        stroke="#4bd396"
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />{" "}
    </svg>
  );
};

/* bottom link */
const BottomLink = () => {
  const { t } = useTranslation();
  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Back to")}{" "}
          <Link to={"/auth/customer-login"} className="text-white ms-1">
            <b>{t("Sign In")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Logout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(logoutAsync());
  }, [dispatch]);

  return (
    <>
      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="text-center">
          <div className="mt-4">
            <div className="logout-checkmark">
              <LogoutIcon />
            </div>
          </div>

          <h3>{t("See you again !")}</h3>

          <p className="text-muted">
            {" "}
            {t("You are now successfully sign out.")}{" "}
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Logout;
