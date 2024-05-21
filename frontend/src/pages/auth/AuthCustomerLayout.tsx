import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LogoLight from "../../assets/images/logo-light.png";
interface AccountLayoutProps {
  bottomLinks?: any;
  isCombineForm?: boolean;
  children?: any;
}

const AuthCustomerLayout = ({
  bottomLinks,
  children,
  isCombineForm,
}: AccountLayoutProps) => {
  useEffect(() => {
    if (document.body)
      document.body.classList.add(
        "authentication-bg",
        "authentication-bg-pattern",
      );

    return () => {
      if (document.body)
        document.body.classList.remove(
          "authentication-bg",
          "authentication-bg-pattern",
        );
    };
  }, []);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/auth/login`;
    navigate(path);
  };

  return (
    <>
      <div className="account-pages mt-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={5} lg={5} xl={5}>
              <Card className="bg-pattern">
                <Card.Body className="p-4">
                  <div className="text-center w-95 m-auto row">
                    <div className="col-lg-3">
                      <Button
                        onClick={() => {
                          navigate("/application");
                        }}
                        className="btn-sm"
                      >
                        Start Application
                      </Button>
                    </div>
                    <div className="auth-brand col-lg-6">
                      <Link to="/" className="logo logo-dark text-center">
                        <span className="logo-lg">
                          <img src={LogoLight} alt="" height="100" />
                        </span>
                      </Link>
                      {/* <h2 className="text-muted">Society</h2>
                      <h3 className="text-muted">North Park Manor & Fisgard House</h3> */}

                      {/* <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">
                          <img src={LogoLight} alt="" height="22" />
                        </span>
                      </Link> */}
                    </div>
                    <div className="col-lg-3">
                      <Button onClick={routeChange} className="btn-sm">
                        Staff Login
                      </Button>
                    </div>
                    {/* <p className="text-muted mb-4 mt-3">{helpText}</p> */}
                  </div>
                  {children}
                </Card.Body>
              </Card>

              {/* bottom links */}
              {bottomLinks}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AuthCustomerLayout;
