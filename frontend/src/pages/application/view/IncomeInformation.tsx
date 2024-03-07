import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../../types/ApplicationType";
import { ViewRaw } from "../../../components/ViewRaw";

export const IncomeInformation = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">D. Income Information:</FormLabel>

      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={3}>
          <ViewRaw label="First Name" value={data.ii_last_name_first} />
        </Col>
        <Col lg={5}>
          <ViewRaw label="Source" value={data.ii_income_source_first} />
        </Col>
        <Col lg={4}>
          <ViewRaw label="Gross Monthly Income ($)" value={data.ii_income_first} />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={3}>
          <ViewRaw label="First Name" value={data.ii_last_name_second} />
        </Col>
        <Col lg={5}>
          <ViewRaw label="Source" value={data.ii_income_source_second} />
        </Col>
        <Col lg={4}>
          <ViewRaw label="Gross Monthly Income ($)" value={data.ii_income_second} />
        </Col>
      </Row>
    </FormGroup>
  );
};
