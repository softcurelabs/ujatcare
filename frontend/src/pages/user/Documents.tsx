import FileUploader from "../../components/FileUploader";
import { Button, FormLabel } from "react-bootstrap";
import { FormInput } from "../../components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { PasswordDataType } from "../../types/UserType";
import { userResetAsync, userUploadAsync } from "../../store/user/UserSlice";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { profileAsync } from "../../store/auth/AuthSlice";
import Loader from "../../components/Loader";

interface IdType {
  id: Number;
}

export const Documents = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    }),
  );

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      id: id,
    },
    resolver: schemaResolver,
  });

  const onSubmit = handleSubmit((data) => {
    // setIsLoading(true);
    // dispatch(userUploadAsync(data))
    //   .unwrap()
    //   .then((response) => {
    //     if (response && response.status === true) {
    //       setToast(response.message);
    //       setNewError("");
    //       dispatch(profileAsync());
    //     }
    //     setIsLoading(false);
    //   })
    //   .catch((reason) => {
    //     setNewError(reason.message);
    //     setToast("");
    //     setIsLoading(false);
    //   });
  });
  return (
    <form onSubmit={onSubmit}>
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      <fieldset>
        <FormLabel>Licence</FormLabel>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={1}
              onFileUpload={(files) => {
                console.log("Uploaded files - ", files);
                setValue("image", files[0]);
              }}
            ></FileUploader>
          )}
          name="image"
          control={control}
        />
        <FormLabel>Passport</FormLabel>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={1}
              onFileUpload={(files) => {
                console.log("Uploaded files - ", files);
                setValue("image", files[0]);
              }}
            ></FileUploader>
          )}
          name="image"
          control={control}
        />
        <FormLabel>Other Documents</FormLabel>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={1}
              onFileUpload={(files) => {
                console.log("Uploaded files - ", files);
                setValue("image", files[0]);
              }}
            ></FileUploader>
          )}
          name="image"
          control={control}
        />
        <FormLabel>Document</FormLabel>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={1}
              onFileUpload={(files) => {
                console.log("Uploaded files - ", files);
                setValue("image", files[0]);
              }}
            ></FileUploader>
          )}
          name="image"
          control={control}
        />
        <FormInput type="hidden" name="id" register={register} />
        {isLoading ? (
          <Loader />
        ) : (
          <Button type="submit" className="waves-effect waves-light me-1">
            Submit
          </Button>
        )}
      </fieldset>
    </form>
  );
};
