import React, { useState } from "react";
import { Modal, Button, FormLabel } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { VerticalForm, FormInput } from "../../components/";
import { Controller, useForm } from "react-hook-form";
import FileUploader from "../../components/FileUploader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { userImportAsync } from "../../store/user/UserSlice";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
// import DownloadUser from "";

interface AddMemberProps {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
}

const ImportUsers = ({ show, onHide, onSubmit }: AddMemberProps) => {
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
    dispatch(userImportAsync(data))
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

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-xl"
      >
        <Modal.Header className="bg-light" onHide={onHide} closeButton>
          <Modal.Title className="m-0">Import Recidents</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <FormLabel>
            Sample user import:{" "}
            <Link to="/users.xlsx" target="_blank">
              Download
            </Link>
          </FormLabel>
          {toast && <div className="alert alert-success">{toast}</div>}
          {error && (
            <div
              className="alert alert-danger mt-3"
              role="alert"
              dangerouslySetInnerHTML={{ __html: error }}
            ></div>
          )}
          <form onSubmit={onSubmitModal}>
            <Controller
              render={() => (
                <FileUploader
                  maxFiles={1}
                  onFileUpload={(files) => {
                    // console.log("Uploaded files - ", files);
                    setValue("users", files[0]);
                  }}
                ></FileUploader>
              )}
              name="users"
              control={control}
            />

            <div className="text-end mt-2">
              {isLoading ? (
                <Loader />
              ) : (
                <Button variant="success" type="submit" className="waves-effect waves-light me-1">
                  Save
                </Button>
              )}
              <Button variant="danger" className="waves-effect waves-light" onClick={onHide}>
                Exit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImportUsers;
