import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { flatAsync } from "../../store/flat/FlatSlice";
import { FormInput } from "../../components";
import { applicationAssignAsync } from "../../store/application/ApplicationSlice";
import Loader from "../../components/Loader";
import { ButtonLoader } from "../../components/ButtonLoader";

export const AssignFlat = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Assign Flat",
  submitForm,
  show,
  targetId,
  handleClose,
}: ConfimationType) => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { id: targetId } });
  const { flats } = useSelector((state: RootState) => ({
    flats: state.Flat.flats,
  }));

  const [toast, setToast] = useState("");
  const [error, setNewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(flatAsync());
    setValue("id", targetId);
  }, [targetId]);
  const onSubmit = handleSubmit((data: any) => {
    setIsLoading(true);
    dispatch(applicationAssignAsync(data))
      .unwrap()
      .then((response) => {
        if (response && response.status === true) {
          setToast(response.message);
          //   reset();
        }
        setIsLoading(false);
      })
      .catch((reason) => {
        for (var element in reason.errors) {
          try {
            // @ts-ignore
            setError(element, { message: reason.errors[element].toString() });
          } catch (errror) {}
        }
        setIsLoading(false);
      });
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={onSubmit}>
          <fieldset>
            <FormInput type="hidden" name="id" value={targetId.toString()} register={register} />
            <FormInput
              type="select"
              label="Suite"
              name="flat_id"
              containerClass="mb-3 "
              register={register}
              errors={errors}
            >
              {flats.length &&
                flats.map((flat) => (
                  <optgroup key={`apartment${flat.id}`} label={flat.name.toString()}>
                    {flat.flats.map((aprtment) =>
                      aprtment.has_occupied ? (
                        <option key={"flat" + aprtment.id} value={aprtment.id} disabled>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      ) : (
                        <option key={"flat" + aprtment.id} value={aprtment.id}>
                          {aprtment.name}
                          {aprtment.has_occupied}
                        </option>
                      )
                    )}
                  </optgroup>
                ))}
            </FormInput>
            {isLoading ? (
              <ButtonLoader />
            ) : (
              <Button variant="primary" type="submit" className="waves-effect waves-light me-1">
                Submit
              </Button>
            )}
          </fieldset>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleClose()}>
          {okLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

interface ConfimationType {
  okLabel?: string;
  cancelLabel?: string;
  title?: string;
  confirmation?: string;
  show: boolean;
  targetId: Number;
  submitForm(arg: Number): void;
  handleClose(): void;
}
