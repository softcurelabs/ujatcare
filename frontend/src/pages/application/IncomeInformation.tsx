import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../types/ApplicationType";
import { FormInput } from "../../components";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const IncomeInformation = ({
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
      <FormLabel className="fw-bolder fs-4 ">D. Income Information:</FormLabel>
      <FormLabel className="fw-bolder fs-6 ms-2">
        List gross monthly income, before deductions, for yourself and 2nd
        applicant, if applicable
      </FormLabel>

      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={3}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="ii_last_name_first"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_last_name_first"
          />
        </Col>
        <Col lg={5}>
          <FormInput
            label="Source (i.e., employment, EI, pensions, income assistance,
                etc.)"
            type="text"
            register={register}
            name="ii_income_source_first"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_income_source_first"
          />
        </Col>
        <Col lg={4}>
          <FormInput
            label="Gross Monthly Income ($)"
            type="text"
            register={register}
            name="ii_income_first"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_income_first"
          />
        </Col>
      </Row>
      {/* <Row>
        <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={3}>
          <FormInput
            label="First Name"
            type="text"
            register={register}
            name="ii_last_name_second"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_last_name_second"
          />
        </Col>
        <Col lg={5}>
          <FormInput
            label="Source (i.e., employment, EI, pensions, income assistance,
                etc.)"
            type="text"
            register={register}
            name="ii_income_source_second"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_income_source_second"
          />
        </Col>
        <Col lg={4}>
          <FormInput
            label="Gross Monthly Income ($)"
            type="text"
            register={register}
            name="ii_income_second"
            errors={errors}
            className="form-control "
            containerClass={"mb-3"}
            labelClassName="d-block"
            size={2}
            key="ii_income_second"
          />
        </Col>
      </Row> */}
    </FormGroup>
  );
};
