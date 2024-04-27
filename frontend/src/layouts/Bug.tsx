import React, { useState } from "react";
import { Modal, Button, FormLabel } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { VerticalForm, FormInput } from "../components/";
import { Controller, useForm } from "react-hook-form";
import FileUploader from "../components/FileUploader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { userBugAsync, userImportAsync } from "../store/user/UserSlice";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { ButtonLoader } from "../components/ButtonLoader";

interface AddMemberProps {
    show: boolean;
    onHide: () => void;
    onSubmit: () => void;
  }
  
const Bug = ({ show, onHide, onSubmit }: AddMemberProps) => {

      /*
    form validation schema
    */
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   name: yup.string().required("Please enter name"),
    })
  );

  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setNewError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
    resolver: schemaResolver,
  });

  const onSubmitModal = handleSubmit((data) => {
    setIsLoading(true);
    setToast("");
    setNewError("");
    dispatch(userBugAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          setNewError(response.errors);
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        setNewError(reason.message);
        setToast("");
        setIsLoading(false);
      });
  });
    return <Modal
    show={show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
    dialogClassName="modal-lg"
  >
    <Modal.Header className="bg-light" onHide={onHide} closeButton>
      <Modal.Title className="m-0">Create a bug or provide a suggesion</Modal.Title>
    </Modal.Header>
    <Modal.Body className="p-4">
      {toast && <div className="alert alert-success">{toast}</div>}
      {error && (
        <div
          className="alert alert-danger mt-3"
          role="alert"
          dangerouslySetInnerHTML={{ __html: error }}
        ></div>
      )}
      <form onSubmit={onSubmitModal}>
      <FormInput
                    label="Title"
                    type="text"
                    name="title"
                    className="form-control-sm fs-5"
                    containerClass={"mb-3"}
                    register={register}
                    key="title"
                    errors={errors}
                  />
                  <FormInput 
                    label="Description"
                    type="textarea"
                    name="description"
                    rows="5"
                    className="form-control-sm fs-5"
                    containerClass={"mb-3"}
                    register={register}
                    key="description"
                    errors={errors}
                  />
        <Controller
          render={() => (
            <FileUploader
              maxFiles={3}
              onFileUpload={(files) => {
                // console.log("Uploaded files - ", files);
                setValue("documents", files);
              }}
            ></FileUploader>
          )}
          name="documents"
          control={control}
        />
        <div className="text-end mt-2">
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <Button variant="success" type="submit" className="waves-effect waves-light me-1">
              Create
            </Button>
          )}
          <Button variant="danger" className="waves-effect waves-light" onClick={onHide}>
            Exit
          </Button>
        </div>
      </form>
    </Modal.Body>
  </Modal>;
}

export default Bug;