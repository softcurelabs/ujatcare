import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ApplicationType } from "../../types/ApplicationType";
import { Applicant } from "./view/Applicant";
import { HouseHoldComposition } from "./view/HouseHoldComposition";
import { ResidenceHistory } from "./view/ResidenceHistory";
import { IncomeInformation } from "./view/IncomeInformation";
import { Assets } from "./view/Assets";
import { Accomodation } from "./view/Accomodation";
import { ReasonForMove } from "./view/ReasonForMove";
import { Comms } from "./view/Comms";
import { UploadDocuments } from "./view/UploadDocuments";
import { useEffect, useState } from "react";
import { Confirmation } from "../../components/Confirmation";
import { AssignFlat } from "./AssignFlat";

export const ViewApplicationModal = ({
  okLabel = "OK",
  cancelLabel = "Cancel",
  title = "View Application",
  submitForm,
  show,
  handleClose,
  handleArchive,
  handleUnArchive,
  handleRemove,
  data,
}: ConfimationType) => {
  const handlePrint = () => {
    window.print();
  };
  const [showDel, setshowDel] = useState<boolean>(false);
  const [showAssign, setshowAssign] = useState<boolean>(false);

  return (
    data && (
      <Modal show={show} onHide={handleClose} className="print-me" size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Applicant data={data} />
          <HouseHoldComposition data={data} />
          <ResidenceHistory data={data} />
          <IncomeInformation data={data} />
          <Assets data={data} />
          <Accomodation data={data} />
          <ReasonForMove data={data} />
          <UploadDocuments data={data} />
          {/* <Comms data={data} /> */}
        </Modal.Body>
        <Modal.Footer>
          {data.status !== 1 ? (
            data.status === 0 ? (
              <Button variant="primary" onClick={() => handleArchive()}>
                Archive
              </Button>
            ) : (
              <Button variant="primary" onClick={() => handleUnArchive()}>
                Un Archive
              </Button>
            )
          ) : (
            <></>
          )}
          {data.status === 0 ? (
            <Button variant="primary" onClick={() => setshowAssign(true)}>
              Accept
            </Button>
          ) : (
            <></>
          )}

          <Button variant="primary" onClick={() => handleClose()}>
            {okLabel}
          </Button>
          <Button variant="primary" onClick={() => handlePrint()}>
            Print
          </Button>
          {data.status !== 1 ? (
            <Button
              variant="primary"
              onClick={() => {
                setshowDel(true);
              }}
            >
              Delete
            </Button>
          ) : (
            <></>
          )}
          <AssignFlat
            show={showAssign}
            targetId={data.id}
            submitForm={(id) => { setshowAssign(false);handleClose();}}
            handleClose={() => {setshowAssign(false);}}
          />
          <Confirmation
            show={showDel}
            targetId={data.id}
            submitForm={() => {
              handleRemove();
              handleClose();
              setshowDel(false);
            }}
            handleClose={() => {
              setshowDel(false);
            }}
          />
        </Modal.Footer>
      </Modal>
    )
  );
};

interface ConfimationType {
  okLabel?: string;
  cancelLabel?: string;
  title?: string;
  confirmation?: string;
  show: boolean;
  submitForm(arg: Number): void;
  handleClose(): void;
  data: ApplicationType | null;
  handleArchive(): void;
  handleUnArchive(): void;
  handleRemove(): void;
}
