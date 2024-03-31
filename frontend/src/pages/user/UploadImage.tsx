import FileUploader from "../../components/FileUploader";
import { Button } from "react-bootstrap";
import { FormInput } from "../../components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { userUploadAsync } from "../../store/user/UserSlice";
import * as yup from "yup";
import { profileAsync } from "../../store/auth/AuthSlice";
import { ButtonLoader } from "../../components/ButtonLoader";

export const UploadImage = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );

  const { register, handleSubmit, setValue, control } = useForm<any>({
    defaultValues: {
      id: id,
    },
    resolver: schemaResolver,
  });

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    dispatch(userUploadAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          setNewError("");
          dispatch(profileAsync());
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        setNewError(reason.message);
        setToast("");
        setIsLoading(false);
      });
  });
  return (
    <form onSubmit={onSubmit}>
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      <fieldset className="mt-4">
        <Controller
          render={() => (
            <FileUploader
              title="Drag Profile pic or click here to upload"
              maxFiles={1}
              onFileUpload={(files) => {
                setValue("image", files[0]);
              }}
            ></FileUploader>
          )}
          name="image"
          control={control}
        />
        <FormInput type="hidden" name="id" register={register} />
        {isLoading ? (
          <ButtonLoader />
        ) : (
          <Button type="submit" className="waves-effect waves-light me-1">
            Submit
          </Button>
        )}
      </fieldset>
    </form>
  );
};
