"use client";

import { useState } from "react";
import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Calendar28 } from "@/components/ui/Date";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function ResidenceHistory({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) {
  const [fStartDate, fSetStartDate] = useState<Date>();
  const [fEndDate, fSetEndDate] = useState<Date>();
  const [sStartDate, sSetStartDate] = useState<Date>();
  const [sEndDate, sSetEndDate] = useState<Date>();
  const [tStartDate, tSetStartDate] = useState<Date>();
  const [tEndDate, tSetEndDate] = useState<Date>();

  return (
    <div className="space-y-8">
      <Label className="text-xl font-bold">C. Residency History:</Label>
      <Label className="text-sm text-gray-600">
        Please list your address(es) for the past 2 years
      </Label>
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Last Address:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <Label>Address</Label>
            <Input {...register("rh_address_first")} className="mt-1" />
            {errors.rh_address_first && (
              <p className="text-red-500 text-sm">
                {errors.rh_address_first.message}
              </p>
            )}
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>Start Date</Label>
            <Input
              type="hidden"
              {...register("rh_start_date_first")}
              value={fStartDate ? fStartDate.toISOString().split("T")[0] : ""}
            />
            <div className="mt-1">
              <Calendar28
                value={fStartDate}
                onChange={(date) => {
                  fSetStartDate(date);
                  setValue(
                    "rh_start_date_first",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_start_date_first && (
              <p className="text-red-500 text-sm">
                {errors.rh_start_date_first.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>End Date</Label>
            <Input
              type="hidden"
              {...register("rh_end_date_first")}
              value={fEndDate ? fEndDate.toISOString().split("T")[0] : ""}
            />

            <div className="mt-1">
              <Calendar28
                value={fEndDate}
                onChange={(date) => {
                  fSetEndDate(date);
                  setValue(
                    "rh_end_date_first",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_end_date_first && (
              <p className="text-red-500 text-sm">
                {errors.rh_end_date_first.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-3">
            <Label>Landlord Name</Label>
            <Input {...register("landlord_name_first")} className="mt-1" />
            {errors.landlord_name_first && (
              <p className="text-red-500 text-sm">
                {errors.landlord_name_first.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Landlord Phone</Label>
            <Input {...register("landlord_phone_first")} className="mt-1" />
            {errors.landlord_phone_first && (
              <p className="text-red-500 text-sm">
                {errors.landlord_phone_first.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* --------------------- SECOND ADDRESS --------------------- */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Second Last Address:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <Label>Address</Label>
            <Input {...register("rh_address_second")} className="mt-1" />
            {errors.rh_address_second && (
              <p className="text-red-500 text-sm">
                {errors.rh_address_second.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Start Date</Label>
            <Input
              type="hidden"
              {...register("rh_start_date_second")}
              value={sStartDate ? sStartDate.toISOString().split("T")[0] : ""}
            />
            <div className="mt-1">
              <Calendar28
                value={sStartDate}
                onChange={(date) => {
                  sSetStartDate(date);
                  setValue(
                    "rh_start_date_second",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_start_date_second && (
              <p className="text-red-500 text-sm">
                {errors.rh_start_date_second.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>End Date</Label>
            <Input
              type="hidden"
              {...register("rh_end_date_second")}
              value={sEndDate ? sEndDate.toISOString().split("T")[0] : ""}
            />
            <div className="mt-1">
              <Calendar28
                value={sEndDate}
                onChange={(date) => {
                  sSetEndDate(date);
                  setValue(
                    "rh_end_date_second",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_end_date_second && (
              <p className="text-red-500 text-sm">
                {errors.rh_end_date_second.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-3">
            <Label>Landlord Name</Label>
            <Input {...register("landlord_name_second")} className="mt-1" />
            {errors.landlord_name_second && (
              <p className="text-red-500 text-sm">
                {errors.landlord_name_second.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Landlord Phone</Label>
            <Input {...register("landlord_phone_second")} className="mt-1" />
            {errors.landlord_phone_second && (
              <p className="text-red-500 text-sm">
                {errors.landlord_phone_second.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* --------------------- THIRD ADDRESS --------------------- */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Third Last Address:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3">
            <Label>Address</Label>
            <Input {...register("rh_address_third")} className="mt-1" />
            {errors.rh_address_third && (
              <p className="text-red-500 text-sm">
                {errors.rh_address_third.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Start Date</Label>
            <Input
              type="hidden"
              {...register("rh_start_date_third")}
              value={tStartDate ? tStartDate.toISOString().split("T")[0] : ""}
            />
            <div className="mt-1">
              <Calendar28
                value={tStartDate}
                onChange={(date) => {
                  fSetEndDate(date);
                  setValue(
                    "rh_start_date_third",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_start_date_third && (
              <p className="text-red-500 text-sm">
                {errors.rh_start_date_third.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>End Date</Label>
            <Input
              type="hidden"
              {...register("rh_end_date_third")}
              value={tEndDate ? tEndDate.toISOString().split("T")[0] : ""}
            />
            <div className="mt-1">
              <Calendar28
                value={tEndDate}
                onChange={(date) => {
                  tSetEndDate(date);
                  setValue(
                    "rh_end_date_third",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.rh_end_date_third && (
              <p className="text-red-500 text-sm">
                {errors.rh_end_date_third.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-3">
            <Label>Landlord Name</Label>
            <Input {...register("landlord_name_third")} className="mt-1" />
            {errors.landlord_name_third && (
              <p className="text-red-500 text-sm">
                {errors.landlord_name_third.message}
              </p>
            )}
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Landlord Phone</Label>
            <Input {...register("landlord_phone_third")} className="mt-1" />
            {errors.landlord_phone_third && (
              <p className="text-red-500 text-sm">
                {errors.landlord_phone_third.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
