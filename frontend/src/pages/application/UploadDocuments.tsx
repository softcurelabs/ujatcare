import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../types/ApplicationType";
import { FormInput } from "../../components";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import FileUploader from "../../components/FileUploader";
import { Form } from "react-bootstrap";

export const UploadDocuments = ({
  register,
  errors,
  setValue,
  control,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
  control: Control<ApplicationType>;
}) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">
        G. For communications purposes only, please list the languages that you
        speak.
      </FormLabel>
      <Row>
        <Col lg={6}>
          <FormInput
            label="First Language"
            type="text"
            register={register}
            name="first_language"
            errors={errors}
            className="form-control ms-2"
            containerClass={"mb-3 input-group"}
            labelClassName=""
            size={2}
            key="first_language"
          />
        </Col>

        <Col lg={6}>
          <FormInput
            label="Second Language"
            type="text"
            register={register}
            name="second_language"
            errors={errors}
            className="form-control ms-2"
            containerClass={"mb-3 input-group"}
            labelClassName=""
            size={2}
            key="second_language"
          />
        </Col>
        <Col lg={12}>
          <Form.Group className="mb-3 input-group">
            <FormLabel className="d-block">
              If English is NOT your first language, do you have access to a
              translator?
            </FormLabel>
            <FormInput
              type="radio"
              className="form-check-inline ms-2"
              name="translator_required"
              label="Yes"
              value={1}
              register={register}
            />
            <FormInput
              type="radio"
              className="form-check-inline"
              name="translator_required"
              label="No"
              checked={true}
              value={2}
              register={register}
            />
          </Form.Group>
        </Col>
      </Row>
      <FormLabel className="fw-bolder fs-4 ">Document attachment:</FormLabel>
      <div className="fw-bold">Applicants – Required Documents:</div>
      <div className="mb-2">
        <ul>
          <li>3 months of all bank account statements.</li>
          <li>3 months of pay stubs if employed.</li>
          <li>Most recent Tax Assessment.</li>
          <li>
            Documents that indicate any payments currently received from E.I. or
            W.C.B.
          </li>
          <li>
            Seniors (65 plus) are required to provide a Rate Benefit letter
            which is provided by Service Canada (1-800-277-9914).
          </li>
          <li>
            Information on assets worth over $10,000 (cash, investments, real
            estate).
          </li>
          <li>
            Applicants that are not Canadian Citizens Require Confirmation of
            their Status.
          </li>
        </ul>
      </div>
      <Controller
        render={() => (
          <FileUploader
            maxFiles={10}
            onFileUpload={(files) => {
              setValue("documents", files);
            }}
          ></FileUploader>
        )}
        name="documents"
        control={control}
      />
      {errors && errors["documents"] ? (
        <Form.Control.Feedback type="invalid">
          {errors["documents"]!.message}
        </Form.Control.Feedback>
      ) : null}
    </FormGroup>
  );
};
