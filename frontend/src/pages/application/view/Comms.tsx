import { Col, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../../types/ApplicationType";

export const Comms = ({ data }: { data: ApplicationType }) => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <div className="mb-1">
            <FormLabel className="me-1 ">Signature</FormLabel>
            <img
              src={data.signature_first}
              width={400}
              height={40}
              alt="Empty signature"
            />
          </div>
          <div className="mb-1">
            <FormLabel className="me-1 ">Signature</FormLabel>
            <img
              src={data.signature_second}
              width={400}
              height={40}
              alt="Empty signature"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
