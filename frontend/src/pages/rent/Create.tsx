import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { FormInput } from "../../components/";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { ButtonLoader } from "../../components/ButtonLoader";
import { invoiceAddAsync } from "../../store/invoice/InvoiceSlice";
import { UserProfileType } from "../../types/UserType";
import HyperDatepicker from "../../components/Datepicker";

interface AddMemberProps {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  users: Array<UserProfileType>;
}

const Create = ({ users, show, onHide, onSubmit }: AddMemberProps) => {
  /*
    form validation schema
    */
  const schemaResolver = yupResolver(
    yup.object().shape({
      //   name: yup.string().required("Please enter name"),
    })
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dispatch = useDispatch<AppDispatch>();
  const [toast, setToast] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setNewError] = useState("");

  useEffect(() => {
    setNewError("");
    setToast("");
  }, [show]);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
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
    dispatch(invoiceAddAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          setNewError(response.errors);
          reset();
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
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-lg"
    >
      <Modal.Header className="bg-light" onHide={onHide} closeButton>
        <Modal.Title className="m-0">Create a Invoice</Modal.Title>
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
            label="Tenants"
            type="select"
            name="tenant"
            className="form-control-sm fs-5"
            containerClass={"mb-3"}
            register={register}
            key="tenants"
            errors={errors}
          >
            {users.map((user) => (
              <option value={user.user.id.toString()}>
                {user.user.name} - {user.user.flat_name}({user.user.apartment_name})
              </option>
            ))}
          </FormInput>
          <div className="mb-3">
            <label className="form-label">Due Date</label> <br />
            <HyperDatepicker
              hideAddon={true}
              showTimeSelect={false}
              minDate={new Date()}
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setValue("due_date", date.toLocaleString("sv-SE"));
              }}
            />
            {errors && errors["due_date"] ? (
              <Form.Control.Feedback type="invalid">
                {errors["due_date"]!.message}
              </Form.Control.Feedback>
            ) : null}
          </div>
          <FormInput
            label="Item Description"
            type="text"
            name="title"
            className="form-control-sm fs-5"
            containerClass={"mb-3"}
            register={register}
            key="title"
            errors={errors}
          />
          <FormInput
            label="Total"
            type="text"
            name="total"
            className="form-control-sm fs-5"
            containerClass={"mb-3"}
            register={register}
            key="total"
            errors={errors}
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
    </Modal>
  );
};

export default Create;
