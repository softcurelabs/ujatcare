import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { FormInput } from "../../components";
import { ApplicationType } from "../../types/ApplicationType";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const Assets = ({
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
      <FormLabel className="fw-bolder fs-4 ">E. Assets:</FormLabel>
      <FormLabel className="fw-bolder fs-6 ms-2">
        Please list the current value of all assets held by you and members of your household
      </FormLabel>
      <Row>
        <Col lg={4}>
          <FormInput
            label="Cash/ Bank
            Balance ($)"
            type="text"
            register={register}
            name="cash_balance"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="cash_balance"
          />
        </Col>

        <Col lg={4}>
          <FormInput
            label="Stocks/Bonds/
            Term deposits ($)"
            type="text"
            register={register}
            name="stock_deposit"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="stock_deposit"
          />
        </Col>
        <Col lg={4}>
          <FormInput
            label="Value of Real Estate
            Owned (list) ($)"
            type="text"
            register={register}
            name="value_real_estate"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="value_real_estate"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <FormInput
            label="RRSP’s, Annuities, Mortgages, (held by
                yourself or household member - list) ($)"
            type="text"
            register={register}
            name="value_morgages"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="value_morgages"
          />
        </Col>
        <Col lg={4}>
          <FormInput
            label="Other: (i.e.
                car - list) ($)"
            type="text"
            register={register}
            name="value_others"
            errors={errors}
            className="form-control-sm "
            containerClass={"mb-3 input-group"}
            labelClassName="me-2"
            size={2}
            key="value_others"
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
