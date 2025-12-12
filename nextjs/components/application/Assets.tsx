"use client";

import { ApplicationType } from "@/app/types/ApplicationType";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Assets({
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
      <Label className="text-xl font-bold">E. Assets:</Label>
      <Label className="text-sm text-gray-600">
        Please list the current value of all assets held by you and members of your household
      </Label>

      <div className="grid grid-cols-12 gap-4">
        {/* Cash / Bank Balance */}
        <div className="col-span-12 md:col-span-4">
          <Label>Cash / Bank Balance ($)</Label>
          <Input {...register("cash_balance")} className="mt-1" />
          {errors.cash_balance && (
            <p className="text-red-500 text-sm mt-1">{errors.cash_balance.message}</p>
          )}
        </div>

        {/* Stocks / Bonds / Term deposits */}
        <div className="col-span-12 md:col-span-4">
          <Label>Stocks / Bonds / Term deposits ($)</Label>
          <Input {...register("stock_deposit")} className="mt-1" />
          {errors.stock_deposit && (
            <p className="text-red-500 text-sm mt-1">{errors.stock_deposit.message}</p>
          )}
        </div>

        {/* Value of Real Estate */}
        <div className="col-span-12 md:col-span-4">
          <Label>Value of Real Estate Owned (list) ($)</Label>
          <Input {...register("value_real_estate")} className="mt-1" />
          {errors.value_real_estate && (
            <p className="text-red-500 text-sm mt-1">{errors.value_real_estate.message}</p>
          )}
        </div>

        {/* RRSPs, Annuities, Mortgages */}
        <div className="col-span-12 md:col-span-8">
          <Label>RRSP’s, Annuities, Mortgages (held by yourself or household member - list) ($)</Label>
          <Input {...register("value_morgages")} className="mt-1" />
          {errors.value_morgages && (
            <p className="text-red-500 text-sm mt-1">{errors.value_morgages.message}</p>
          )}
        </div>

        {/* Other Assets */}
        <div className="col-span-12 md:col-span-4">
          <Label>Other: (i.e. car - list) ($)</Label>
          <Input {...register("value_others")} className="mt-1" />
          {errors.value_others && (
            <p className="text-red-500 text-sm mt-1">{errors.value_others.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
