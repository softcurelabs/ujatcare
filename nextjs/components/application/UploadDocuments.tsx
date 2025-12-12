"use client";

import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { ApplicationType } from "@/app/types/ApplicationType";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import FileUploader from "@/components/application/FileUploader";

export default function UploadDocuments({
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
  return (
    <div className="space-y-8">
      {/* Title */}
      <Label className="text-xl font-bold">
        G. For communications purposes only, please list the languages that you
        speak.
      </Label>

      {/* ---------------------- LANGUAGES ---------------------- */}
      <div className="grid grid-cols-12 gap-4">
        {/* First Language */}
        <div className="col-span-12 md:col-span-6">
          <Label>First Language</Label>
          <Input {...register("first_language")} className="mt-1" />
          {errors.first_language && (
            <p className="text-red-500 text-sm mt-1">
              {errors.first_language.message}
            </p>
          )}
        </div>

        {/* Second Language */}
        <div className="col-span-12 md:col-span-6">
          <Label>Second Language</Label>
          <Input {...register("second_language")} className="mt-1" />
          {errors.second_language && (
            <p className="text-red-500 text-sm mt-1">
              {errors.second_language.message}
            </p>
          )}
        </div>
      </div>

      {/* ---------------------- TRANSLATOR REQUIRED ---------------------- */}
      <div className="space-y-2">
        <Label>
          If English is NOT your first language, do you have access to a
          translator?
        </Label>

        <RadioGroup
          defaultValue="2"
          className="flex gap-6"
          onValueChange={(val) => setValue("translator_required", Number(val))}
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="1" id="translator_yes" />
            <Label htmlFor="translator_yes">Yes</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="2" id="translator_no" />
            <Label htmlFor="translator_no">No</Label>
          </div>
        </RadioGroup>

        {errors.translator_required && (
          <p className="text-red-500 text-sm mt-1">
            {errors.translator_required.message}
          </p>
        )}
      </div>

      {/* ---------------------- DOCUMENT TEXT ---------------------- */}
      <div>
        <Label className="text-xl font-bold">Document attachment:</Label>

        <div className="font-semibold mt-2">
          Applicants – Required Documents:
        </div>

        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
          <li>3 months of all bank account statements.</li>
          <li>3 months of pay stubs if employed.</li>
          <li>Most recent Tax Assessment.</li>
          <li>Documents for E.I. / W.C.B payments.</li>
          <li>For seniors (65+): Rate Benefit letter (Service Canada).</li>
          <li>Info on assets over $10,000 (cash, real estate, investments).</li>
          <li>Non-citizens: Confirmation of Status documents.</li>
        </ul>
      </div>

      {/* ---------------------- FILE UPLOADER ---------------------- */}
      <div>
        <Controller
          name="documents"
          control={control}
          render={() => (
            <FileUploader
              maxFiles={10}
              onFileUpload={(files) => {
                console.log("Uploaded files:", files);
                setValue("documents", files);
              }}
            />
          )}
        />

        {errors.documents && (
          <p className="text-red-500 text-sm mt-2">
            {errors.documents.message}
          </p>
        )}
      </div>
    </div>
  );
}
