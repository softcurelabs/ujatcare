"use client";

import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/store"; // update path
import Link from "next/link";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";

// Child components (we will convert one-by-one later)
import Applicant from "./Applicant";
import HouseHoldComposition from "./HouseHoldComposition";
import ResidenceHistory from "./ResidenceHistory";
import IncomeInformation from "./IncomeInformation";
import Assets from "./Assets";
import Accomodation from "./Accomodation";
import ReasonForMove from "./ReasonForMove";
import Comms from "./Comms";
import UploadDocuments from "./UploadDocuments";
import GeneralInfo from "./GeneralInfo";

// // Store actions
// import { applicationAddAsync } from "@/store/application/ApplicationSlice"; // update path

import { ApplicationType } from "@/app/types/ApplicationType"; // update path
// import { ButtonLoader } from "@/components/ButtonLoader"; // update path

export default function BasicInputElements() {
  // const schemaResolver = yupResolver(yup.object().shape({}));

  // const [toast, setToast] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // // const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    control,
    setError,
    watch,
    formState: { errors },
  } = useForm<ApplicationType>({
    defaultValues: {
      gender_first: 1,
      gender_second: 1,
      hc_gender_first: 1,
      hc_gender_second: 1,
      hc_wheelchair_first: 2,
      hc_wheelchair_second: 2,
      translator_required: 2,
      under_notice: 2,
    },
    shouldFocusError: true,
    // resolver: schemaResolver,
  });

  // // Watch all values
  // const allValues = watch(); // <- put it here

  // useEffect(() => {
  //   console.log("Form values changed:", allValues);
  // }, [allValues]);

  const onSubmit = handleSubmit(async (data) => {
    // setIsLoading(true);
    // dispatch(applicationAddAsync(data))
    //   .unwrap()
    //   .then((response) => {
    //     if (response?.status) {
    //       setToast(response.message);
    //       window.scrollTo({ top: 0, behavior: "smooth" });
    //     }
    //     setIsLoading(false);
    //   })
    //   .catch((reason) => {
    //     for (let element in reason.errors) {
    //       try {
    //         setError(element as any, {
    //           message: reason.errors[element].toString(),
    //         });
    //       } catch {}
    //     }
    //     const firstError = Object.keys(errors).find((key) => errors[key]);
    //     if (firstError) setFocus(firstError as any);
    //     setIsLoading(false);
    //   });
  });

  return (
    <div className="space-y-6">
      {/* {toast && (
        <Alert className="bg-green-100 border-green-300 text-green-800">
          <AlertDescription>{toast}</AlertDescription>
        </Alert>
      )} */}

      <Label className="text-sm font-medium text-gray-800">
        Note: When you have completed this application call the North Park Manor
        for an appointment.
      </Label>

      <form onSubmit={onSubmit} className="space-y-8">
        <Applicant
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />

        <HouseHoldComposition
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <ResidenceHistory
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <IncomeInformation
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <Assets register={register} errors={errors} setValue={setValue} />

        <Accomodation register={register} errors={errors} setValue={setValue} />

        <ReasonForMove
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <UploadDocuments
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />

        <Comms
          register={register}
          errors={errors}
          setValue={setValue}
          control={control}
        />

        <div className="flex justify-center">
          {isLoading ? (
            // <ButtonLoader />
            <span>Loading</span>
          ) : (
            <Button
              type="submit"
              className="px-6 bg-[#6658dd] text-white cursor-pointer hover:bg-[#574bbc]"
            >
              Submit
            </Button>
          )}
        </div>

        <div className="flex justify-center">
          <Button
            variant="link"
            className="text-[#6658dd] hover:text-[#574bbc] hover:no-underline cursor-pointer text-sm"
            onClick={() => setShow(true)}
          >
            General Information
          </Button>
        </div>
      </form>
      <GeneralInfo
        show={show}
        onHide={() => setShow(false)}
        onSubmit={() => setShow(false)}
      />
    </div>
  );
}
