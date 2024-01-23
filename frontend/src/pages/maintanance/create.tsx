import React from "react";
import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
  Dropdown,
  DropdownButton,
  FormGroup,
} from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import { FormInput } from "../../components/";

interface Colors {
  variant: string;
  name: string;
}

const BasicInputElements = () => {
  /*
   * form methods
   */
  const methods = useForm({
    defaultValues: {
      password: "12345",
      statictext: "email@example.com",
      color: "#727cf5",
    },
  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label className="me-2">Building</Form.Label>
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio1"
                  name="customRadio"
                  label="NPM"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="FH"
                />
              </Form.Group>
            </Col>

            <Col lg={3}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Apt
                </Form.Label>
                <Form.Control
                  type="text"
                  name="small"
                  id="small"
                  className="input-group"
                  size="sm"
                />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Date Reported
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </Form.Group>
            </Col>
            <Col lg={2}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Time
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Tanent Name
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Phone
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </Form.Group>
            </Col>
            <Col lg={5}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Ok to Enter
                </Form.Label>
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio1"
                  name="customRadio"
                  label="Yes"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="No"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FloatingLabel controlId="floatingTextarea2" label="Work Requested" className="mb-3 ">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FormGroup className="input-group mb-3 ">
                <Form.Label htmlFor="small" className="me-2">
                  Tenant Signature
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Action Taken
                </Form.Label>
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio1"
                  name="customRadio"
                  label="Work Completed"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="Repaired Temporarily"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="Parts on Order"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="Outside Contractor Called"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <FormGroup className="input-group mb-3 ">
                <Form.Label htmlFor="small" className="me-2">
                  Date
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup className="input-group mb-3 ">
                <Form.Label htmlFor="small" className="me-2">
                  Time In
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </FormGroup>
            </Col>
            <Col lg={4}>
              <FormGroup className="input-group mb-3 ">
                <Form.Label htmlFor="small" className="me-2">
                  Time Out
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FloatingLabel controlId="floatingTextarea2" label="Work Done" className="mb-3 ">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FormGroup className="input-group mb-3 ">
                <Form.Label htmlFor="small" className="me-2">
                  Service Person Signature
                </Form.Label>
                <Form.Control type="text" name="small" id="small" size="sm" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group className="mb-3 input-group">
                <Form.Label htmlFor="small" className="me-2">
                  Action Taken
                </Form.Label>
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio1"
                  name="customRadio"
                  label="Chargable to Occupant"
                />
                <Form.Check
                  type="radio"
                  className="form-check-inline"
                  id="default-radio2"
                  name="customRadio"
                  label="Management"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

const Create = () => {
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
          { label: "Dashboard", path: "/dashboard-1" },
          { label: "Maintanance Create", path: "/maintanance/create", active: true },
        ]}
        title={"Maintanance Request"}
      />

      <Row>
        <Col>
          <BasicInputElements />
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Create;
