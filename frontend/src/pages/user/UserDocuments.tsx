import { Card, Col, Row } from "react-bootstrap";
import { UserDocumentType } from "../../types/UserType";
import { Link } from "react-router-dom";
import config from "../../config";
import { userDeleteDocumentsAsync } from "../../store/user/UserSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { RefCallback } from "react";

const UserDocuments = ({
  documents,
  type,
  refresh,
}: {
  documents: Array<UserDocumentType>;
  type: number;
  refresh: Function;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {documents.map((val) =>
        val.type === type ? (
          <div>
            <Card className="mt-1 mb-1 shadow-none border" key={val.id + "-file"}>
              <div className="p-2">
                <Row className="align-items-center">
                  <Col className="ps-0 ms-2">
                    <Link
                      to={`${config.BASE_URL}/${val.document_path}`}
                      className="text-muted fw-bold"
                      target="_blank"
                    >
                      {val.document_name}
                    </Link>
                  </Col>
                  <Col className="text-end">
                    <Link to="#" className="btn btn-link btn-lg text-muted shadow-none">
                      <i
                        className="dripicons-cross"
                        onClick={() => {
                          dispatch(userDeleteDocumentsAsync(val.id))
                            .unwrap()
                            .then((response) => {
                              refresh();
                            });
                        }}
                      ></i>
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        ) : (
          <></>
        )
      )}
    </>
  );
};

export default UserDocuments;
