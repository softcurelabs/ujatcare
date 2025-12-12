"use client";

import { useRef } from "react";
// import SignatureCanvas from "react-signature-canvas";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ApplicationType } from "@/app/types/ApplicationType";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function Comms({
  register,
  errors,
  setValue,
  control,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
  control: Control<ApplicationType>;
}) {
  //   const signCanvasFirst = useRef<SignatureCanvas | null>(null);
  //   const signCanvasSecond = useRef<SignatureCanvas | null>(null);

  //   const getSignature = (canvasRef: any) => {
  //     if (canvasRef.current) return canvasRef.current.toDataURL();
  //     return "";
  //   };

  return (
    <div className="space-y-6 ">
      {/* Title */}
      <Label className="font-bold text-xl">
        DECLARATION: Please read and sign this statement.
      </Label>

      {/* Declaration Box */}
      <Card className="p-4 space-y-4 rounded-md shadow-none text-gray-500">
        {/* Section 1 */}
        <div>
          <p className="font-semibold text-lg">I/We declare:</p>
          <ul className="list-disc ml-6 text-base space-y-1">
            <li>This is my application;</li>
            <li>
              All the information in it is correct and complete to the best of
              my knowledge and belief.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <p className="font-semibold text-lg">I/We authorize:</p>
          <ul className="list-disc ml-6 text-base space-y-1 text-justify">
            <li>
              Pursuant to the Freedom of Information and Protection of Privacy
              Act (the FOI Act), the North Park Manor Society to make any
              inquiries that are necessary to verify the information given in
              this application; and
            </li>
            <li>
              Pursuant to the FOI Act, any person, corporation, or social agency
              to release to the North Park Manor Society any information
              pertinent to the assessment of my/our application; and
            </li>
            <li>
              The North Park manor Society to receive an exchange with credit
              bureaus and my/our previous landlords’ credit and other
              information about me/us, to be used in the decision-making process
              to provide me/us with rental accommodation.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <p className="font-semibold text-lg">I/We understand:</p>
          <ul className="list-disc ml-6 text-base space-y-1 text-justify">
            <li>
              That, in accordance with section 33 (c) of the FOI Act, the
              information on this application may be shared with other
              affordable housing providers in order to increase my/our
              opportunities for rent-to-geared-income housing; and
            </li>
            <li>
              That this application does not constitute any agreement on the
              part of North Park Manor Society to provide me/us with rental
              accommodation; and
            </li>
            <li>
              That it is my/our responsibility to advise North Park Manor
              Society of any changes to the information given in this
              application and to provide any supporting materials required for
              my/our application.
            </li>
          </ul>
        </div>
      </Card>

      {/* Signatures */}
      {/* <div className="space-y-6">

      
        <div>
          <Label className="font-semibold mb-2 block">Signature 1</Label>

          <Controller
            control={control}
            name="signature_first"
            render={({ field }) => (
              <SignatureCanvas
                ref={signCanvasFirst}
                penColor="black"
                onEnd={() => field.onChange(getSignature(signCanvasFirst))}
                canvasProps={{
                  width: 500,
                  height: 100,
                  className: "border border-gray-400 rounded-md bg-white",
                }}
              />
            )}
          />

          {errors.signature_first && (
            <p className="text-red-600 text-sm mt-1">
              {errors.signature_first.message}
            </p>
          )}
        </div>

  
        <div>
          <Label className="font-semibold mb-2 block">Signature 2</Label>

          <Controller
            control={control}
            name="signature_second"
            render={({ field }) => (
              <SignatureCanvas
                ref={signCanvasSecond}
                penColor="black"
                onEnd={() => field.onChange(getSignature(signCanvasSecond))}
                canvasProps={{
                  width: 500,
                  height: 100,
                  className: "border border-gray-400 rounded-md bg-white",
                }}
              />
            )}
          />

          {errors.signature_second && (
            <p className="text-red-600 text-sm mt-1">
              {errors.signature_second.message}
            </p>
          )}
        </div>
      </div> */}
    </div>
  );
}
