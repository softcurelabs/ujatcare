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

const GeneralInfo = ({ show, onHide, onSubmit }: AddMemberProps) => {
  /*
    form validation schema
    */

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
          <Modal.Title className="m-0">General Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 fs-4">
          <div className="">NPMS provides subsidized housing – rent is based on income.</div>
          <div>
            {" "}
            Rent is currently based on 30% of income (exception sponsored non-Canadian residents.)
          </div>
          <div className="mb-2"> NPMS has 2 buildings with 210 units.</div>
          <div className="fw-bold">Fisgard House – 6 storey building – 844 Fisgard Street</div>
          <div className="mb-2">
            <ul>
              <li>2 elevators, 1 common laundry ($2.00 wash/$2.00 dry)</li>
              <li>Underground secured parking (based on availability)</li>
              <li>48 small one bedroom for singles</li>
              <li>4 one bedroom for couples</li>
              <li>2 Mobility Friendly</li>
            </ul>
          </div>
          <div className="fw-bold">
            North Park Manor – 16 storey high rise – 875 North Park Street
          </div>
          <div>
            <ul>
              <li>2 elevators, 2 laundry facilities ($2.00 wash/$2.00 dry)</li>
              <li>Underground secured parking (based on availability)</li>
              <li>24 one bedroom for couples</li>
              <li>134 bachelors</li>
              <li>4 Mobility Friendly</li>
            </ul>
          </div>
          <div className="mb-2">
            Crime free rated building, secured entrances, camera monitoring.
          </div>
          <div className="fw-bold">Applicants – Minimum Requirements:</div>
          <div className="mb-2">
            <ul>
              <li>Age – 55 plus</li>
              <li>Income – single under $28,000 – couple under $33,500</li>
              <li>Market rate tenants being accepted.</li>
              <li>BC resident for at least 1 year</li>
              <li>100% Non-Smoking Building/Property</li>
              <li>
                No Pets (Service Animals may be approved with proper certification and NPMS Boards
                Approval)
              </li>
            </ul>
            <div className="fw-bold">Applicants – Required Documents:</div>
            <div className="mb-2">
              <ul>
                <li>3 months of all bank account statements.</li>
                <li>3 months of pay stubs if employed.</li>
                <li>Most recent Tax Assessment.</li>
                <li>Documents that indicate any payments currently received from E.I. or W.C.B.</li>
                <li>
                  Seniors (65 plus) are required to provide a Rate Benefit letter which is provided
                  by Service Canada (1-800-277-9914).
                </li>
                <li>Information on assets worth over $10,000 (cash, investments, real estate).</li>
                <li>
                  Applicants that are not Canadian Citizens Require Confirmation of their Status.
                </li>
              </ul>
            </div>
            <div className="fw-bold">Wait List FAQs</div>
            <div>
              <ul>
                <li>There is a minimum of at least 3 months for our waiting list.</li>
                <li>
                  (For correct information regarding our waitlist and vacancies, please contact us
                  directly to avoid misinformation)
                </li>
                <li>
                  Exceptions on our waitlist may occur based on need and availability of suites.
                </li>
                <li>Applicants are not contacted until they reach the short list.</li>
                <li>Credit checks may be done on applicants.</li>
                <li>
                  We recommend that you keep your application current by contacting us after 3
                  months and providing any updated information and current bank statements to help
                  fast track the process once we have an available suite.
                </li>
                <li>Make sure that you have included all required documents.</li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GeneralInfo;
