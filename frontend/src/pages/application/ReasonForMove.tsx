import { Col, FormGroup, FormLabel, Row, Form } from "react-bootstrap";
import { FormInput } from "../../components";
import { ApplicationType } from "../../types/ApplicationType";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

export const ReasonForMove = ({
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
      <FormLabel className="fw-bolder fs-4 ">G. Reason for Move:</FormLabel>
      <Row>
        <Col lg={8}>
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">
              Are you under a Notice to End Tenancy from your present address?
            </FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline ms-2"
              name="under_notice"
              label="Yes"
              value={1}
              register={register}
              key={"under_notice_1"}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="under_notice"
              label="No"
              value={2}
              checked={true}
              register={register}
              key={"under_notice_2"}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <FormInput
            label="If you are not under notice, why do you wish to move?"
            type="text"
            register={register}
            name="wish_to_move"
            errors={errors}
            className="form-control ms-2"
            containerClass={"mb-3 input-group"}
            labelClassName=""
            size={2}
            key="wish_to_move"
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
