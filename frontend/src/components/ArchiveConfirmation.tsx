import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const ArchiveConfirmation = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "Confirmation",
  submitForm,
  show,
  targetId,
  handleClose,
}: ConfimationType) => {
    const [reason, SetReason] = useState<number>(0);

  return (
    <Modal show={show} onHide={handleClose} backdropClassName="backdrophigh" className="backdrop">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to submit? Please select reason for archive.

        <select
            className="react-select form-control form-select react-select-container"
            onChange={(event) => {
                SetReason(Number(event?.target.value).valueOf())
            }}
            >
                <option value="0" selected={true}>Deceased</option>
                <option value="1">Vacated</option>
                <option value="2">Evicted</option>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelLabel}
        </Button>
        <Button variant="primary" onClick={() => submitForm(targetId, reason)}>
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
  submitForm(arg: Number, reason: number): void;
  handleClose(): void;
}
