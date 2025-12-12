"use client";

import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function IncomeInformation({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) {
  return (
    <div className="space-y-8">
      <Label className="text-xl font-bold">D. Income Information:</Label>
      <Label className="text-sm text-gray-600">
        List gross monthly income, before deductions, for yourself and 2nd applicant, if applicable
      </Label>

      {/* --------------------- FIRST APPLICANT --------------------- */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">First Applicant:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <Label>First Name</Label>
            <Input {...register("ii_last_name_first")} className="mt-1" />
            {errors.ii_last_name_first && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_last_name_first.message}</p>
            )}
          </div>

          <div className="col-span-12 md:col-span-5">
            <Label>Source (i.e., employment, EI, pensions, income assistance, etc.)</Label>
            <Input {...register("ii_income_source_first")} className="mt-1" />
            {errors.ii_income_source_first && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_income_source_first.message}</p>
            )}
          </div>

          <div className="col-span-12 md:col-span-4">
            <Label>Gross Monthly Income ($)</Label>
            <Input {...register("ii_income_first")} className="mt-1" />
            {errors.ii_income_first && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_income_first.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* --------------------- SECOND APPLICANT --------------------- */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Second Applicant:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <Label>First Name</Label>
            <Input {...register("ii_last_name_second")} className="mt-1" />
            {errors.ii_last_name_second && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_last_name_second.message}</p>
            )}
          </div>

          <div className="col-span-12 md:col-span-5">
            <Label>Source (i.e., employment, EI, pensions, income assistance, etc.)</Label>
            <Input {...register("ii_income_source_second")} className="mt-1" />
            {errors.ii_income_source_second && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_income_source_second.message}</p>
            )}
          </div>

          <div className="col-span-12 md:col-span-4">
            <Label>Gross Monthly Income ($)</Label>
            <Input {...register("ii_income_second")} className="mt-1" />
            {errors.ii_income_second && (
              <p className="text-red-500 text-sm mt-1">{errors.ii_income_second.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
