import { Col, FormGroup, FormLabel, Row, Form } from "react-bootstrap";
import { ViewRaw } from "../../../components/ViewRaw";
import { ApplicationType, boolType } from "../../../types/ApplicationType";

export const ReasonForMove = ({ data }: { data: ApplicationType }) => {
  return (
    <div>
      <FormLabel className="fw-bolder fs-4 ">G. Reason for Move:</FormLabel>
      <Row>
        <Col lg={8}>
          <ViewRaw
            label="Are you under a Notice to End Tenancy from your present address?"
            value={boolType[data.under_notice]}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ViewRaw
            label="If you are not under notice, why do you wish to move?"
            value={data.wish_to_move}
          />
        </Col>
      </Row>
    </div>
  );
};
