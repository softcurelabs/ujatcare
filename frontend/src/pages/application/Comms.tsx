import { Button, Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { FormInput } from "../../components";
import { ApplicationType } from "../../types/ApplicationType";
import { Controller } from "react-hook-form";
import SignaturePad from "react-signature-canvas";
import ReactSignatureCanvas from "react-signature-canvas";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import GeneralInfo from "./GeneralInfo";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  Control,
} from "react-hook-form";

export const Comms = ({
  register,
  errors,
  setValue,
  control,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
  control: Control<ApplicationType, any>;
}) => {
  let signCanvasFirst = useRef<ReactSignatureCanvas | null>(null);
  let signCanvasSecond = useRef<ReactSignatureCanvas | null>(null);

  const formatIntoPngFirst = () => {
    if (signCanvasFirst.current) {
      const dataURL = signCanvasFirst.current.toDataURL();
      return dataURL;
    }
  };
  const formatIntoPngSecond = () => {
    if (signCanvasSecond.current) {
      const dataURL = signCanvasSecond.current.toDataURL();
      return dataURL;
    }
  };

  return (
    <FormGroup>
      <Row>
        <Col className="mb-2">
          <FormLabel className="fw-bolder fs-4 ">
            DECLARATION: Please read and sign this statement.
          </FormLabel>
          <div className="border px-2">
            <div className="mb-2">
              <label className="fw-bolder fs-5">I/We declare:</label>
              <ul className="fs-5">
                <li>
                  <span>This is my application; and</span>
                </li>
                <li>
                  All the information in it is correct and complete to the best
                  of my knowledge and belief.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <label className="fw-bolder fs-5">I/We authorize:</label>
              <ul className="fs-5">
                <li>
                  <span>
                    Pursuant to the Freedom of Information and Protection of
                    Privacy Act (the FOI Act), the North Park Manor Society to
                    make any inquiries that are necessary to verify the
                    information given in this application; and
                  </span>
                </li>
                <li>
                  Pursuant to the FOI Act, any person, corporation, or social
                  agency to release to the North Park Manor Society any
                  information pertinent to the assessment of my/our application;
                  and
                </li>
                <li>
                  The North Park manor Society to receive an exchange with
                  credit bureaus and my/our previous landlords’ credit and other
                  information about me/us, to be used in the decision-making
                  process to provide me/us with rental accommodation.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <label className="fw-bolder fs-5">I/We understand:</label>
              <ul className="fs-5">
                <li>
                  <span>
                    That, in accordance with section 33 (c) of the FOI Act, the
                    information on this application may be shared with other
                    affordable housing providers in order to increase my/our
                    opportunities for rent-to-geared-income housing; and
                  </span>
                </li>
                <li>
                  That this application does not constitute any agreement on the
                  part of North Park Manor Society to provide me/us with rental
                  accommodation; and
                </li>
                <li>
                  That it is my/our responsibility to advise North Park Manor
                  Society of any changes to the information given in this
                  application and to provide any supporting materials required
                  for my/our application.
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <FormGroup className="mb-1">
            <FormLabel className="me-1 ">Signature</FormLabel>
            <Controller
              control={control}
              name="signature_first"
              render={({ field }) => (
                <SignaturePad
                  ref={signCanvasFirst}
                  onEnd={() => field.onChange(formatIntoPngFirst())}
                  penColor="green"
                  canvasProps={{
                    width: 500,
                    height: 30,
                    style: { border: "1px solid green" },
                  }}
                />
              )}
            />
            <FormInput
              name="signature_first"
              register={register}
              errors={errors}
              className="is-invalid"
              type="hidden"
            />
            {errors && errors["signature_first"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["signature_first"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel className="me-1 ">Signature</FormLabel>
            <Controller
              control={control}
              name="signature_second"
              render={({ field }) => (
                <SignaturePad
                  ref={signCanvasSecond}
                  onEnd={() => field.onChange(formatIntoPngSecond())}
                  penColor="green"
                  canvasProps={{
                    width: 500,
                    height: 30,
                    style: { border: "1px solid green" },
                  }}
                />
              )}
            />
            <FormInput
              name="signature_second"
              register={register}
              errors={errors}
              className="is-invalid"
              type="hidden"
            />
            {/* {errors && errors["tanent_signature"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["tanent_signature"]!.message}
              </Form.Control.Feedback>
            ) : null} */}
          </FormGroup>
        </Col>
      </Row>
    </FormGroup>
  );
};
