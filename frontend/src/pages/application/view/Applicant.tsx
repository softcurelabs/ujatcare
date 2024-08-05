import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType, gender } from "../../../types/ApplicationType";
import { ViewRaw } from "../../../components/ViewRaw";

export const Applicant = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4">A. Applicants:</FormLabel>
      <Row>
        <FormLabel className="fw-bolder fs-6">First Applicant:</FormLabel>
        <Col lg={12}>
          <ViewRaw label="Email" value={data.email} />
        </Col>
        <Col lg={3}>
          <ViewRaw
            label="Name"
            value={
              gender[data.gender_first.toString()] +
              " " +
              data.last_name_first +
              " " +
              data.first_name_first
            }
          />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Home Phone " value={data.home_phone_first} />
        </Col>
      </Row>
      <Row>
        {/* <FormLabel className="fw-bolder fs-6">Second Applicant:</FormLabel>
        <Col lg={3}>
          <ViewRaw
            label="Name"
            value={
              ((data.gender_second && gender[data.gender_second]) ?? "") +
              " " +
              (data.last_name_second ?? "") +
              " " +
              (data.first_name_second ?? "")
            }
          />
        </Col> */}
        <Col lg={3}>
          <ViewRaw label="Home Phone" value={data.home_phone_second} />
        </Col>
      </Row>
    </FormGroup>
  );
};
