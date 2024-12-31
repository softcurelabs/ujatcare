import { Button, Alert, Row, Col } from "react-bootstrap";
import { Navigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

// actions
// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";
import { loggedInAsync } from "../../store/auth/AuthSlice";
import { AppDispatch, RootState } from "../../store";
import { ButtonLoader } from "../../components/ButtonLoader";

interface UserData {
  email: string;
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
            {t("Forgot password?")}
          </Link>
        </p>
        {/* <p className="text-white-50">
          {t("Don't have an account?")}{" "}
          <Link to={"/auth/register"} className="text-white ms-1">
            <b>{t("Sign Up")}</b>
          </Link>
        </p> */}
      </Col>
    </Row>
  );
};

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, error, loading } = useSelector((state: RootState) => ({
    user: state.Auth.user,
    loading: state.Auth.loading,
    error: state.Auth.error,
    userLoggedIn: state.Auth.userLoggedIn,
  }));

  /*
  form validation schema
  */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required(t("Please enter Email/Phone")),
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
  const redirectUrl = location?.search?.slice(6) || "/dashboard-2";

  return (
    <>
      {(userLoggedIn || user) && <Navigate to={redirectUrl}></Navigate>}

      <AuthLayout helpText={t("Staff Login")} bottomLinks={<BottomLink />}>
        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
          <FormInput
            label={t("Email/Phone")}
            type="text"
            name="email"
            placeholder="Enter your Email/Phone Number"
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
            {loading ? (
              <ButtonLoader />
            ) : (
              <Button variant="primary" type="submit">
                {t("Log In")}
              </Button>
            )}
          </div>
        </VerticalForm>

        {/* <div className="text-center">
          <h5 className="mt-3 text-muted">{t("Sign in with")}</h5>
          <SocialLinks />
        </div> */}
      </AuthLayout>
    </>
  );
};

export default Login;
