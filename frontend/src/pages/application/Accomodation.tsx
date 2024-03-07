import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../types/ApplicationType";
import { FormInput } from "../../components";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const Accomodation = ({
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
      <FormLabel className="fw-bolder fs-4 ">F. Current Accommodation:</FormLabel>
      <FormLabel className="fw-bolder fs-6 ms-2">
        (please describe your current accommodation as completely as possible in the space provided
        below)
      </FormLabel>

      <Row>
        <Col lg={8}>
          <FormInput
            label="Accommodation"
            type="text"
            register={register}
            name="accomodation"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="accomodation"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <FormInput
            label="Please state your current monthly rent: ($)"
            type="text"
            register={register}
            name="monthly_rent"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="monthly_rent"
          />
        </Col>
        <Col lg={6}>
          <FormInput
            label="What does you rent include? (i.e. heat, electricity, cable, - list)"
            type="text"
            register={register}
            name="monthly_includes"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="monthly_includes"
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
