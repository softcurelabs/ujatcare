import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../types/ApplicationType";
import { FormInput } from "../../components";
import HyperDatepicker from "../../components/Datepicker";
import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const HouseHoldComposition = ({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) => {
  const [actionDate, setActionDate] = useState(new Date());
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4">B. Household Composition:</FormLabel>
      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={2}>
          <FormInput
            label="Last Name"
            type="text"
            register={register}
            name="hc_last_name_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_last_name_first"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="hc_first_name_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_first_name_first"
          />
        </Col>
        <Col lg={2}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              Birth Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="hc_birth_date_first"
              value={actionDate.toISOString().split("T")[0]}
              key="hc_birth_date_first"
            />
            <HyperDatepicker
              hideAddon={false}
              value={actionDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-DD-YYYY"
              onChange={(date) => {
                setActionDate(date);
                setValue("hc_birth_date_first", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["hc_birth_date_first"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["hc_birth_date_first"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={1}>
          <FormInput
            label="Age"
            type="text"
            register={register}
            name="hc_age_first"
            errors={errors}
            className="form-control-sm"
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_age_first"
          />
        </Col>
        <Col lg={1}>
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">Sex</FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_gender_first"
              label="M"
              value={1}
              checked={true}
              register={register}
              key={"hc_gender_first_1"}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_gender_first"
              label="F"
              value={2}
              register={register}
              key={"hc_gender_first_2"}
            />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <FormInput
            label="Relationship"
            type="text"
            register={register}
            name="hc_relationship_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_relationship_first"
          />
        </Col>
        <Col lg={1}>
          <FormInput
            label="Disability"
            type="text"
            register={register}
            name="hc_disability_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_disability_first"
          />
        </Col>
        <Col lg={1} className="p-0">
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">Wheelchair?</FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_wheelchair_first"
              label="Y"
              value={1}
              register={register}
              key={"hc_wheelchair_first_y"}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_wheelchair_first"
              checked={true}
              key={"hc_wheelchair_first_n"}
              label="N"
              value={2}
              register={register}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={2}>
          <FormInput
            label="Last Name"
            type="text"
            register={register}
            name="hc_last_name_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_last_name_second"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="hc_first_name_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_first_name_second"
          />
        </Col>
        <Col lg={2}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              Birth Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="hc_birth_date_second"
              value={actionDate.toISOString().split("T")[0]}
              key="hc_birth_date_second"
            />
            <HyperDatepicker
              hideAddon={false}
              value={actionDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-DD-YYYY"
              onChange={(date) => {
                setActionDate(date);
                setValue("hc_birth_date_second", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["hc_birth_date_second"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["hc_birth_date_second"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={1}>
          <FormInput
            label="Age"
            type="text"
            register={register}
            name="hc_age_second"
            errors={errors}
            className="form-control-sm"
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_age_second"
          />
        </Col>
        <Col lg={1}>
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">Sex</FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_gender_second"
              label="M"
              checked={true}
              value={1}
              register={register}
              key={"hc_gender_second_m"}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_gender_second"
              label="F"
              value={2}
              register={register}
              key={"hc_gender_second_f"}
            />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <FormInput
            label="Relationship"
            type="text"
            register={register}
            name="hc_relationship_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_relationship_second"
          />
        </Col>
        <Col lg={1}>
          <FormInput
            label="Disability"
            type="text"
            register={register}
            name="hc_disability_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="hc_disability_second"
          />
        </Col>
        <Col lg={1} className="p-0">
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">Wheelchair?</FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_wheelchair_second"
              label="Y"
              value={1}
              register={register}
              key={"hc_wheelchair_second_1"}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="hc_wheelchair_second"
              label="N"
              value={2}
              register={register}
              key={"hc_wheelchair_second_2"}
            />
          </Form.Group>
        </Col>
      </Row>
    </FormGroup>
  );
};
