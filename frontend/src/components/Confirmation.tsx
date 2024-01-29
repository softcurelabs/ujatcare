import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const Confirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Confirmation",
  submitForm,
  show,
  targetId,
  handleClose,
}: ConfimationType) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to submit?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelLabel}
        </Button>
        <Button variant="primary" onClick={() => submitForm(targetId)}>
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
