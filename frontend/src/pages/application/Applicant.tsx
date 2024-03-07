import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { FormInput } from "../../components";
import { ApplicationType } from "../../types/ApplicationType";
import { Form } from "react-bootstrap";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const Applicant = ({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4">A. Applicants:</FormLabel>
      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={12}>
          <FormInput
            label="Email"
            type="text"
            register={register}
            name="email"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="email"
          />
        </Col>
        <Col lg={3}>
          <FormInput
            label="Last Name"
            type="text"
            register={register}
            name="last_name_first"
            errors={errors}
            onChange={(event) => {
              setValue("hc_last_name_first", event.target.value);
            }}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="last_name_first"
          />
        </Col>
        <Col lg={3}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="first_name_first"
            onChange={(event) => {
              setValue("hc_first_name_first", event.target.value);
              setValue("ii_last_name_first", event.target.value);
            }}
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="first_name_first"
          />
        </Col>
        <Col lg={3}>
          <Form.Group className="mb-3 input-group">
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_first"
              label="Mr."
              value={1}
              checked={true}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_first"
              label="Miss"
              value={2}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_first"
              label="Mrs."
              value={3}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_first"
              label="Ms."
              value={4}
              register={register}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <FormInput
            label="Home Phone (250)"
            type="text"
            register={register}
            name="home_phone_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="home_phone_first"
          />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={3}>
          <FormInput
            label="Last Name"
            type="text"
            register={register}
            name="last_name_second"
            errors={errors}
            onChange={(event) => {
              setValue("hc_last_name_second", event.target.value);
            }}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="last_name_second"
          />
        </Col>
        <Col lg={3}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="first_name_second"
            errors={errors}
            onChange={(event) => {
              setValue("hc_first_name_second", event.target.value);
              setValue("ii_last_name_second", event.target.value);
            }}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="first_name_second"
          />
        </Col>
        <Col lg={3}>
          <Form.Group className="mb-3 input-group">
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_second"
              label="Mr."
              value={1}
              checked={true}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_second"
              label="Miss"
              value={2}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_second"
              label="Mrs."
              value={3}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="gender_second"
              label="Ms."
              value={4}
              register={register}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <FormInput
            label="Home Phone (250)"
            type="text"
            register={register}
            name="home_phone_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="home_phone_second"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <FormInput
            label="Current Address"
            type="text"
            register={register}
            name="current_address"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="current_address"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="City"
            type="text"
            register={register}
            name="city"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="city"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="Prov"
            type="text"
            register={register}
            name="prov"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="prov"
          />
        </Col>
        <Col lg={3}>
          <FormInput
            label="Postal Code"
            type="text"
            register={register}
            name="postal_code"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="postal_code"
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
