"use client";

import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  Controller,
  Control,
} from "react-hook-form";
import { ApplicationType } from "@/app/types/ApplicationType";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Applicant({
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
      <div>
        <Label className="text-xl font-bold">A. Applicants:</Label>
      </div>
      <div>
        <Label className="text-lg font-semibold">First Applicant:</Label>
        <div className="grid grid-cols-12 gap-4 mt-3">
          <div className="col-span-12">
            <Label>Email</Label>
            <Input {...register("email")} className="mt-1 rounded-none" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="col-span-10 md:col-span-3">
            <Label>Last Name</Label>
            <Input
              {...register("last_name_first")}
              onChange={(e) => setValue("hc_last_name_first", e.target.value)}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Label>First Name</Label>
            <Input
              {...register("first_name_first")}
              onChange={(e) => {
                setValue("hc_first_name_first", e.target.value);
                setValue("ii_last_name_first", e.target.value);
              }}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <RadioGroup
              defaultValue="1"
              className="mt-6 flex gap-4 "
              onValueChange={(val) => setValue("gender_first", Number(val))}
            >
              {[
                { label: "Mr.", value: "1" },
                { label: "Miss", value: "2" },
                { label: "Mrs.", value: "3" },
                { label: "Ms.", value: "4" },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-1">
                  <RadioGroupItem
                    value={item.value}
                    id={`gender_first${item.value}`}
                    {...register("gender_first")}
                  />
                  <Label htmlFor={`gender_first${item.value}`}>
                    {item.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Label>Home Phone (250)</Label>
            <Input
              {...register("home_phone_first")}
              className="mt-1 rounded-none"
            />
          </div>
        </div>
      </div>
      <div>
        <Label className="text-lg font-semibold">Second Applicant:</Label>
        <div className="grid grid-cols-12 gap-4 mt-3">
          <div className="col-span-12 md:col-span-3">
            <Label>Last Name</Label>
            <Input
              {...register("last_name_second")}
              onChange={(e) => setValue("hc_last_name_second", e.target.value)}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <Label>First Name</Label>
            <Input
              {...register("first_name_second")}
              onChange={(e) => {
                setValue("hc_first_name_second", e.target.value);
                setValue("ii_last_name_second", e.target.value);
              }}
              className="mt-1 rounded-none"
            />
          </div>
          <div className="col-span-12 md:col-span-3">
            <RadioGroup
              defaultValue="1"
              className="mt-6 flex gap-4"
              onValueChange={(val) => setValue("gender_second", Number(val))}
            >
              {[
                { label: "Mr.", value: "1" },
                { label: "Miss", value: "2" },
                { label: "Mrs.", value: "3" },
                { label: "Ms.", value: "4" },
              ].map((item) => (
                <div key={item.value} className="flex items-center space-x-1">
                  <RadioGroupItem
                    value={item.value}
                    {...register("gender_second")}
                  />
                  <Label>{item.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Label>Home Phone (250)</Label>
            <Input
              {...register("home_phone_second")}
              className="mt-1 rounded-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <Label>Current Address</Label>
          <Input
            {...register("current_address")}
            className="mt-1 rounded-none"
          />
        </div>

        <div className="col-span-12 md:col-span-2">
          <Label>City</Label>
          <Input {...register("city")} className="mt-1 rounded-none" />
        </div>

        <div className="col-span-12 md:col-span-2">
          <Label>Prov</Label>
          <Input {...register("prov")} className="mt-1 rounded-none" />
        </div>

        <div className="col-span-12 md:col-span-3">
          <Label>Postal Code</Label>
          <Input {...register("postal_code")} className="mt-1 rounded-none" />
        </div>
      </div>
    </div>
  );
}
