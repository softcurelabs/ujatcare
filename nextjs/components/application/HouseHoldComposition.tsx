"use client";

import { useState } from "react";
import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Calendar28 } from "@/components/ui/Date";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export default function HouseHoldComposition({
  register,
  errors,
  setValue,
}: {
  register: UseFormRegister<ApplicationType>;
  errors: FieldErrors<ApplicationType>;
  setValue: UseFormSetValue<ApplicationType>;
}) {
  const [dateFirst, setDateFirst] = useState<Date>();
  const [dateSecond, setDateSecond] = useState<Date>();

  return (
    <div className="space-y-8">
      <Label className="text-xl font-bold">B. Household Composition:</Label>
      <div className="space-y-3">
        <Label className="text-lg font-semibold">First Applicant:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <Label>Last Name</Label>
            <Input
              {...register("hc_last_name_first")}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>First Name</Label>
            <Input
              {...register("hc_first_name_first")}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>Birth Date</Label>
            <Input
              type="hidden"
              {...register("hc_birth_date_first")}
              value={dateFirst ? dateFirst.toISOString().split("T")[0] : ""}
            />

            <div className="mt-1">
              <Calendar28
                value={dateFirst}
                onChange={(date) => {
                  setDateFirst(date);
                  setValue(
                    "hc_birth_date_first",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.hc_birth_date_first && (
              <p className="text-red-500 text-sm mt-1">
                {errors.hc_birth_date_first.message}
              </p>
            )}
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Age</Label>
            <Input
              {...register("hc_age_first")}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Sex</Label>
            <RadioGroup
              defaultValue="1"
              className="mt-4 flex gap-4"
              onValueChange={(val) => setValue("hc_gender_first", Number(val))}
            >
              <div className="flex items-center gap-1">
                <RadioGroupItem value="1" {...register("hc_gender_first")} />
                <Label>M</Label>
              </div>

              <div className="flex items-center gap-1">
                <RadioGroupItem value="2" {...register("hc_gender_first")} />
                <Label>F</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>Relationship</Label>
            <Input
              {...register("hc_relationship_first")}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Disability</Label>
            <Input
              {...register("hc_disability_first")}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Wheelchair?</Label>
            <RadioGroup
              defaultValue="2"
              className="mt-4 flex gap-4"
              onValueChange={(val) =>
                setValue("hc_wheelchair_first", Number(val))
              }
            >
              <div className="flex items-center gap-1">
                <RadioGroupItem
                  value="1"
                  {...register("hc_wheelchair_first")}
                />
                <Label>Y</Label>
              </div>

              <div className="flex items-center gap-1">
                <RadioGroupItem
                  value="2"
                  {...register("hc_wheelchair_first")}
                />
                <Label>N</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* --------------------- SECOND APPLICANT --------------------- */}
      <div className="space-y-3">
        <Label className="text-lg font-semibold">Second Applicant:</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2">
            <Label>Last Name</Label>
            <Input {...register("hc_last_name_second")} className="mt-1" />
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>First Name</Label>
            <Input {...register("hc_first_name_second")} className="mt-1" />
          </div>

          <div className="col-span-12 md:col-span-2">
            <Label>Birth Date</Label>
            <Input
              type="hidden"
              {...register("hc_birth_date_second")}
              value={dateSecond ? dateSecond.toISOString().split("T")[0] : ""}
            />

            <div className="mt-1">
              <Calendar28
                value={dateSecond}
                onChange={(date) => {
                  setDateSecond(date);
                  setValue(
                    "hc_birth_date_second",
                    date ? date.toLocaleDateString("sv-SE") : ""
                  );
                }}
              />
            </div>
            {errors.hc_birth_date_second && (
              <p className="text-red-500 text-sm mt-1">
                {errors.hc_birth_date_second.message}
              </p>
            )}
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Age</Label>
            <Input {...register("hc_age_second")} className="mt-1" />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Sex</Label>
            <RadioGroup
              defaultValue="1"
              className="mt-4 flex gap-4"
              onValueChange={(val) => setValue("hc_gender_second", Number(val))}
            >
              <div className="flex items-center gap-1">
                <RadioGroupItem value="1" {...register("hc_gender_second")} />
                <Label>M</Label>
              </div>

              <div className="flex items-center gap-1">
                <RadioGroupItem value="2" {...register("hc_gender_second")} />
                <Label>F</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-span-12 md:col-span-2">
            <Label>Relationship</Label>
            <Input {...register("hc_relationship_second")} className="mt-1" />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Disability</Label>
            <Input {...register("hc_disability_second")} className="mt-1" />
          </div>
          <div className="col-span-12 md:col-span-1">
            <Label>Wheelchair?</Label>

            <RadioGroup
              defaultValue="2"
              className="mt-4 flex gap-4"
              onValueChange={(val) =>
                setValue("hc_wheelchair_second", Number(val))
              }
            >
              <div className="flex items-center gap-1">
                <RadioGroupItem
                  value="1"
                  {...register("hc_wheelchair_second")}
                />
                <Label>Y</Label>
              </div>

              <div className="flex items-center gap-1">
                <RadioGroupItem
                  value="2"
                  {...register("hc_wheelchair_second")}
                />
                <Label>N</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
