import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { ApplicationType } from "../../../types/ApplicationType";
import { ViewRaw } from "../../../components/ViewRaw";

export const Assets = ({ data }: { data: ApplicationType }) => {
  return (
    <FormGroup>
      <FormLabel className="fw-bolder fs-4 ">E. Assets:</FormLabel>

      <Row>
        <Col lg={4}>
          <ViewRaw
            label="Cash/ Bank
            Balance ($)"
            value={data.cash_balance}
          />
        </Col>

        <Col lg={4}>
          <ViewRaw
            label="Stocks/Bonds/
            Term deposits ($)"
            value={data.stock_deposit}
          />
        </Col>
        <Col lg={4}>
          <ViewRaw
            label="Value of Real Estate
            Owned (list) ($)"
            value={data.value_real_estate}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <ViewRaw
            label="RRSP’s, Annuities, Mortgages, (held by
                yourself or household member - list) ($)"
            value={data.value_morgages}
          />
        </Col>
        <Col lg={4}>
          <ViewRaw
            label="Other: (i.e.
                car - list) ($)"
            value={data.value_others}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};
