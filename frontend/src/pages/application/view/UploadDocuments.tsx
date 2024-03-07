import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ViewRaw } from "../../../components/ViewRaw";
import { ApplicationType, boolType } from "../../../types/ApplicationType";
import { Link } from "react-router-dom";
import { APICore } from "../../../helpers/api/apiCore";
import config from "../../../config";

export const UploadDocuments = ({ data }: { data: ApplicationType }) => {
  return (
    <div>
      <FormLabel className="fw-bolder fs-4 ">
        G. For communications purposes only, please list the languages that you
        speak.
      </FormLabel>
      <Row>
        <Col lg={6}>
          <ViewRaw label="First Language" value={data.first_language} />
        </Col>

        <Col lg={6}>
          <ViewRaw label="Second Language" value={data.second_language} />
        </Col>
        <Col lg={12}>
          <Form.Group className="input-group">
            <ViewRaw
              label="If English is NOT your first language, do you have access to a translator?"
              value={boolType[data.translator_required]}
            />
          </Form.Group>
        </Col>
      </Row>
      <FormLabel className="fw-bolder fs-4 ">Document attachment:</FormLabel>
      {data.documents.map((val, index) => (
        <div>
          <Link to={config.BASE_URL + "/" + val.document_name} target="_blank">
            {" "}
            Document {index + 1}{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};
