import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ViewRaw } from "../../../components/ViewRaw";
import { ApplicationType, boolType, sex } from "../../../types/ApplicationType";

export const HouseHoldComposition = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4">
        B. Household Composition:
      </FormLabel>
      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={3}>
          <ViewRaw
            label="Name"
            value={data.hc_last_name_first + " " + data.hc_first_name_first}
          />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Birth Date" value={data.hc_birth_date_first} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Age" value={data.hc_age_first} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Sex" value={sex[data.hc_gender_first]} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Relationship" value={data.hc_relationship_first} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Disability" value={data.hc_disability_first} />
        </Col>
        <Col lg={3} className="p-0">
          <ViewRaw
            label="Wheelchair?"
            value={boolType[data.hc_wheelchair_first]}
          />
        </Col>
      </Row>
      {/* <Row>
        <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={3}>
          <ViewRaw
            label="Name"
            value={
              (data.hc_last_name_second ?? "") +
              " " +
              (data.hc_first_name_second ?? "")
            }
          />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Birth Date" value={data.hc_birth_date_second} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Age" value={data.hc_age_second} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Sex" value={sex[data.hc_gender_second]} />
        </Col>
        <Col lg={2}>
          <ViewRaw label="Relationship" value={data.hc_relationship_second} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Disability" value={data.hc_disability_second} />
        </Col>
        <Col lg={3} className="p-0">
          <ViewRaw
            label="Wheelchair?"
            value={boolType[data.hc_wheelchair_second]}
          />
        </Col>
      </Row> */}
    </FormGroup>
  );
};
