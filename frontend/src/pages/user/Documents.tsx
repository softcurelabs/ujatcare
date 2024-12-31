import FileUploader from "../../components/FileUploader";
import { Button, FormLabel } from "react-bootstrap";
import { FormInput } from "../../components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { PasswordDataType, UserDocumentType } from "../../types/UserType";
import {
  userResetAsync,
  userShowAsync,
  userUploadAsync,
  userUploadDocumentsAsync,
} from "../../store/user/UserSlice";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { profileAsync } from "../../store/auth/AuthSlice";
import Loader from "../../components/Loader";
import { ButtonLoader } from "../../components/ButtonLoader";
import UserDocuments from "./UserDocuments";

interface IdType {
  id: Number;
}

export const Documents = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [documents, setDocuments] = useState<Array<UserDocumentType>>([]);
  const { t } = useTranslation();
  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   title: yup.string().required(t("Please select title")).min(10, "Atleast 10 char required"),
    })
  );

  useEffect(() => {
    dispatch(userShowAsync(id))
      .unwrap()
      .then((response) => {
        setDocuments(response.user.documents);
      });
  }, []);

  const refresh = useCallback(() => {
    dispatch(userShowAsync(id))
      .unwrap()
      .then((response) => {
        setDocuments(response.user.documents);
      });
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      user_id: id,
    },
    resolver: schemaResolver,
  });

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    dispatch(userUploadDocumentsAsync(data))
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
      <fieldset>
        <FormLabel>Licence</FormLabel>
        <UserDocuments documents={documents} type={0} refresh={refresh}></UserDocuments>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={2}
              title="Drag or upload Licence"
              onFileUpload={(files) => {
                setValue("licence", files);
              }}
            ></FileUploader>
          )}
          name="licence"
          control={control}
        />
        <FormLabel>Passport</FormLabel>
        <UserDocuments documents={documents} type={1} refresh={refresh}></UserDocuments>

        <Controller
          render={() => (
            <FileUploader
              maxFiles={2}
              title="Upload passport"
              onFileUpload={(files) => {
                setValue("passport", files);
              }}
            ></FileUploader>
          )}
          name="passport"
          control={control}
        />
        <FormLabel>Other Documents</FormLabel>
        <UserDocuments documents={documents} type={2} refresh={refresh}></UserDocuments>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={2}
              title="Drag or click Other documents"
              onFileUpload={(files) => {
                setValue("other_document", files);
              }}
            ></FileUploader>
          )}
          name="other_document"
          control={control}
        />
        <FormLabel>Document</FormLabel>
        <UserDocuments documents={documents} type={3} refresh={refresh}></UserDocuments>
        <Controller
          render={() => (
            <FileUploader
              maxFiles={2}
              title="Drag or click documents"
              onFileUpload={(files) => {
                setValue("documents", files);
              }}
            ></FileUploader>
          )}
          name="documents"
          control={control}
        />
        <FormInput type="hidden" name="user_id" register={register} />
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
