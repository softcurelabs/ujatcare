import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";

import { ViewRaw } from "../../../components/ViewRaw";
import { ApplicationType } from "../../../types/ApplicationType";

export const Accomodation = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">F. Current Accommodation:</FormLabel>
      <Row>
        <Col lg={8}>
          <ViewRaw label="Accommodation" value={data.accomodation} />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <ViewRaw label="Please state your current monthly rent: ($)" value={data.monthly_rent} />
        </Col>
        <Col lg={6}>
          <ViewRaw
            label="What does you rent include? (i.e. heat, electricity, cable, - list)"
            value={data.monthly_includes}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
