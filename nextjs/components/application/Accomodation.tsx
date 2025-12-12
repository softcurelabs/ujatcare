"use client";

import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Accomodation({
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
      {/* Title */}
      <Label className="text-xl font-bold">F. Current Accommodation:</Label>
      <Label className="text-sm text-gray-600">
        (Please describe your current accommodation as completely as possible in the space provided below)
      </Label>

      {/* -------------------- Accommodation Field -------------------- */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <Label>Accommodation</Label>
          <Input
            {...register("accomodation")}
            className="mt-1"
          />
          {errors.accomodation && (
            <p className="text-red-500 text-sm mt-1">
              {errors.accomodation.message}
            </p>
          )}
        </div>
      </div>

      {/* -------------------- Monthly Rent + Includes -------------------- */}
      <div className="grid grid-cols-12 gap-4">
        {/* Monthly Rent */}
        <div className="col-span-12 md:col-span-6">
          <Label>Please state your current monthly rent ($)</Label>
          <Input
            {...register("monthly_rent")}
            className="mt-1"
          />
          {errors.monthly_rent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.monthly_rent.message}
            </p>
          )}
        </div>

        {/* Monthly Includes */}
        <div className="col-span-12 md:col-span-6">
          <Label>What does your rent include? (i.e. heat, electricity, cable - list)</Label>
          <Input
            {...register("monthly_includes")}
            className="mt-1"
          />
          {errors.monthly_includes && (
            <p className="text-red-500 text-sm mt-1">
              {errors.monthly_includes.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
