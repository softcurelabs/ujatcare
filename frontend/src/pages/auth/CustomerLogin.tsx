import { useEffect } from "react";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { Navigate, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

// store
import { RootState, AppDispatch } from "../../store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthCustomerLayout from "./AuthCustomerLayout";
import { loggedInAsync } from "../../store/auth/CustomerAuthSlice";
import { flatAsync } from "../../store/flat/FlatSlice";
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
            {t("Forgot your password?")}
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

const CustomerLogin = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userLoggedIn, loading, flats, error } = useSelector((state: RootState) => ({
    user: state.CustomerAuth.user,
    loading: state.CustomerAuth.loading,
    userLoggedIn: state.CustomerAuth.userLoggedIn,
    error: state.CustomerAuth.error,
    flats: state.Flat.flats,
  }));
  useEffect(() => {
    dispatch(flatAsync());
  }, []);

  /*
  form validation schema
  */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required(t("Please enter Email")),
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
        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}
        <Row>
          <Col lg={12}>
            <div>
              <h4 className="text-center text-muted">
                {flats.length && `${flats[0].name} & ${flats[1].name}`}
              </h4>
            </div>

            <div>
              <h6 className="text-center text-muted">Tenant Login</h6>
            </div>
            <VerticalForm<UserData>
              onSubmit={onSubmit}
              resolver={schemaResolver}
              defaultValues={{ email: "", password: "" }}
            >
              {/* {flats.length && (
                <FormInput type="hidden" name="apartment_id" value={flats[0].id}></FormInput>
              )}
              <FormInput type="select" label="Suite" name="flat_id" containerClass="mb-3">
                <option value="">Select Apartment Number</option>
                {flats.length &&
                  flats[0].flats.map((flat) => (
                    <option key={"flat" + flat.id} value={flat.id}>
                      {flat.name}
                    </option>
                  ))}
              </FormInput> */}
              <FormInput
                label={t("Email")}
                type="text"
                name="email"
                placeholder="Enter your Email"
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
          </Col>

          {/* <Col md={8} lg={8} xl={6}>
            <div>
              <h4 className="text-center text-muted">{flats.length && flats[1].name}</h4>
            </div>

            <div>
              <h6 className="text-center text-muted">Tenant Login</h6>
            </div>
            <VerticalForm<UserData>
              onSubmit={onSubmit}
              resolver={schemaResolver}
              defaultValues={{ username: "", password: "" }}
            >
              {flats.length && (
                <FormInput type="hidden" name="apartment_id" value={flats[1].id}></FormInput>
              )}
              <FormInput type="select" label="Suite" name="flat_id" containerClass="mb-3">
                <option value="">Select Apartment Number</option>
                {flats.length &&
                  flats[1].flats.map((flat) => (
                    <option key={"flat" + flat.id} value={flat.id}>
                      {flat.name}
                    </option>
                  ))}
              </FormInput>
              <FormInput
                label={t("Email")}
                type="text"
                name="email"
                placeholder="Enter your email"
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
          </Col> */}
          <Col lg={12}>
            <div className="text-center mt-2 d-grid">
              <p className="mb-1">
                Contact Office:{" "}
                <a href="mailto:office@northparkmanor.org">office@northparkmanor.org</a>
              </p>
              <p>
                After Hours Maintenance: <a href="tel:250 812-0283">250 812-0283</a>
              </p>
            </div>
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
