import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { FormInput } from "../../components";
import { ApplicationType } from "../../types/ApplicationType";
import HyperDatepicker from "../../components/Datepicker";
import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const ResidenceHistory = ({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) => {
  const [fstartDate, fsetStartDate] = useState(new Date());
  const [fendDate, fsetEndDate] = useState(new Date());
  const [sstartDate, ssetStartDate] = useState(new Date());
  const [sendDate, ssetEndDate] = useState(new Date());
  const [tstartDate, tsetStartDate] = useState(new Date());
  const [tendDate, tsetEndDate] = useState(new Date());
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">C. Residency History:</FormLabel>
      <FormLabel className="fw-bolder fs-6 ms-2">
        Please list your address(es) for the past 2 years
      </FormLabel>

      <Row>
        <Col lg={4}>
          <FormInput
            label="How long have you lived in B.C.?"
            type="text"
            register={register}
            name="long_term"
            errors={errors}
            className="form-control-sm"
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="long_term"
          />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Last Address:</FormLabel>
        <Col lg={2}>
          <FormInput
            label="Address"
            type="text"
            register={register}
            name="rh_address_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="rh_address_first"
          />
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              Start Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_start_date_first"
              value={fstartDate.toISOString().split("T")[0]}
              key="rh_start_date_first"
            />
            <HyperDatepicker
              hideAddon={false}
              value={fstartDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                fsetStartDate(date);
                setValue("rh_start_date_first", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_start_date_first"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["hc_birth_date_first"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              End Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_end_date_first"
              value={fendDate.toISOString().split("T")[0]}
              key="rh_end_date_first"
            />
            <HyperDatepicker
              hideAddon={false}
              value={fendDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                fsetEndDate(date);
                setValue("rh_end_date_first", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_end_date_first"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["hc_birth_date_first"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Name"
            type="text"
            register={register}
            name="landlord_name_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_name_first"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Phone"
            type="text"
            register={register}
            name="landlord_phone_first"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_phone_first"
          />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Second Last Address:</FormLabel>
        <Col lg={2}>
          <FormInput
            label="Address"
            type="text"
            register={register}
            name="rh_address_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="rh_address_second"
          />
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              Start Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_start_date_second"
              value={sstartDate.toISOString().split("T")[0]}
              key="rh_start_date_second"
            />
            <HyperDatepicker
              hideAddon={false}
              value={sstartDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                ssetStartDate(date);
                setValue("rh_start_date_second", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_start_date_second"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["rh_start_date_second"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              End Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_end_date_second"
              value={sendDate.toISOString().split("T")[0]}
              key="rh_end_date_second"
            />
            <HyperDatepicker
              hideAddon={false}
              value={sendDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                ssetEndDate(date);
                setValue("rh_end_date_second", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_end_date_second"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["rh_end_date_second"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Name"
            type="text"
            register={register}
            name="landlord_name_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_name_second"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Phone"
            type="text"
            register={register}
            name="landlord_phone_second"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_phone_second"
          />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Third Last Address:</FormLabel>
        <Col lg={2}>
          <FormInput
            label="Address"
            type="text"
            register={register}
            name="rh_address_third"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="rh_address_third"
          />
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              Start Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_start_date_third"
              value={tstartDate.toISOString().split("T")[0]}
              key="rh_start_date_third"
            />
            <HyperDatepicker
              hideAddon={false}
              value={tstartDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                tsetStartDate(date);
                setValue("rh_start_date_third", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_start_date_third"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["rh_start_date_third"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={3}>
          <FormGroup className="input-group mb-3 ">
            <Form.Label htmlFor="small" className="me-2">
              End Date
            </Form.Label>
            <FormInput
              type="hidden"
              register={register}
              name="rh_end_date_third"
              value={tendDate.toISOString().split("T")[0]}
              key="rh_end_date_third"
            />
            <HyperDatepicker
              hideAddon={false}
              value={tendDate}
              showTimeSelect={false}
              inputClass="form-control-sm"
              dateFormat="MM-dd-yyyy"
              onChange={(date) => {
                tsetEndDate(date);
                setValue("rh_end_date_third", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["rh_end_date_third"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["rh_end_date_third"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Name"
            type="text"
            register={register}
            name="landlord_name_third"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_name_third"
          />
        </Col>
        <Col lg={2}>
          <FormInput
            label="Lanloard Phone"
            type="text"
            register={register}
            name="landlord_phone_third"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="landlord_phone_third"
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
