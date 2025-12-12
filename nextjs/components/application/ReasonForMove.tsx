"use client";

import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ReasonForMove({
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
      <Label className="text-xl font-bold">G. Reason For Move:</Label>

      {/* UNDER NOTICE */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">
          Are you under a Notice to End Tenancy from your present address?
        </Label>

        <RadioGroup
          defaultValue="2"
          className="flex gap-6 mt-1"
          onValueChange={(val) => setValue("under_notice", Number(val))}
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="1" id="under_notice_yes" />
            <Label htmlFor="under_notice_yes">Yes</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="2" id="under_notice_no" />
            <Label htmlFor="under_notice_no">No</Label>
          </div>
        </RadioGroup>
      </div>

      {/* WHY DO YOU WISH TO MOVE */}
      <div className="space-y-3">
        <Label>If you are not under notice, why do you wish to move?</Label>
        <Input {...register("wish_to_move")} className="mt-1" />

        {errors.wish_to_move && (
          <p className="text-red-500 text-sm mt-1">
            {errors.wish_to_move.message}
          </p>
        )}
      </div>
    </div>
  );
}
