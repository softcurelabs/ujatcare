import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ViewRaw } from "../../../components/ViewRaw";
import { ApplicationType } from "../../../types/ApplicationType";

export const ResidenceHistory = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">C. Residency History:</FormLabel>
      <FormLabel className="fw-bolder fs-6 ms-2">
        Please list your address(es) for the past 2 years
      </FormLabel>

      <Row>
        <Col lg={4}>
          <ViewRaw label="How long have you lived in B.C.?" value={data.long_term} />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Last Address:</FormLabel>
        <Col lg={4}>
          <ViewRaw label="Address" value={data.rh_address_first} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Start Date" value={data.rh_start_date_first} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="End Date" value={data.rh_end_date_first} />
        </Col>
        <Col lg={4}>
          <ViewRaw label="Lanloard Name" value={data.landlord_name_first} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Lanloard Phone" value={data.landlord_phone_first} />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Second Last Address:</FormLabel>
        <Col lg={4}>
          <ViewRaw label="Address" value={data.rh_address_second} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Start Date" value={data.rh_start_date_second} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="End Date" value={data.rh_end_date_second} />
        </Col>
        <Col lg={4}>
          <ViewRaw label="Lanloard Name" value={data.landlord_name_second} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Lanloard Phone" value={data.landlord_phone_second} />
        </Col>
      </Row>
      <Row>
        <FormLabel className="fw-bolder fs-6">Third Last Address:</FormLabel>
        <Col lg={4}>
          <ViewRaw label="Address" value={data.rh_address_third} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Start Date" value={data.rh_start_date_third} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="End Date" value={data.rh_end_date_third} />
        </Col>
        <Col lg={4}>
          <ViewRaw label="Lanloard Name" value={data.landlord_name_third} />
        </Col>
        <Col lg={3}>
          <ViewRaw label="Lanloard Phone" value={data.landlord_phone_third} />
        </Col>
      </Row>
    </FormGroup>
  );
};
