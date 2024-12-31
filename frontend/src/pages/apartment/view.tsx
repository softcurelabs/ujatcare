import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Confirmation } from "../../components/Confirmation";
import { flatAsync, flatDeleteAsync } from "../../store/flat/FlatSlice";
import { FlatType } from "../../types/FlatType";

interface NoticeHighlightType {
  flats: Array<FlatType> | null;
}
const BasicTable = ({ flats }: NoticeHighlightType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<Number>(0);
  const [toast, setToast] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    dispatch(flatAsync());
  }, [show]);

  return (
    <Card>
      <Card.Body>
        {toast && <div className="alert alert-success">{toast}</div>}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
        <div className="table-responsive">
          <Table className="mb-0 table-striped dt-responsive nowrap w-100">
            <thead className="table-light">
              <tr>
                <th>Id</th>
                <th>Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {flats && flats.length > 0 ? (
                flats.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.id}</td>
                      <td>{record.name}</td>
                      <td>
                        <React.Fragment>
                          <>
                            <Dropdown className="btn-group" align="end">
                              <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {" "}
                                <Dropdown.Item href={`suite/${record.id}`}>
                                  <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                  Edit Suite
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    setId(record.id);
                                    setShow(true);
                                  }}
                                >
                                  <i className="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>
                                  Delete Suite
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </>
                        </React.Fragment>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <p>No Data Found</p>
              )}
            </tbody>
          </Table>
        </div>
        <Confirmation
          title="Are you sure? "
          message="This can't be undone."
          show={show}
          targetId={id}
          submitForm={(id) => {
            dispatch(flatDeleteAsync(id))
              .unwrap()
              .then((response) => {
                if (response && response.status === true) {
                  setToast(response.message);
                  setShow(false);
                }
              })
              .catch((reason) => {
                setError(reason.message);
                setShow(false);
              });
          }}
          handleClose={() => setShow(false)}
        />
      </Card.Body>
    </Card>
  );
};

const View = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { apartments } = useSelector((state: RootState) => ({
    apartments: state.Flat.flats,
  }));
  const params = useParams();
  const flats = apartments.find(apartment => apartment.id === Number(params.id))
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(flatAsync());
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Apartments", path: "/apartment", active: true }]}
        title={"Suites"}
      />

      <Row>
        <Col lg={12}>
          <Button
            className="waves-effect waves-light mb-3"
            onClick={() => {
              let path = `/suite/new/${flats?.id}`;
              navigate(path);
            }}
          >
            <i className="mdi mdi-plus-circle me-1"></i> Add New Suite
          </Button>
          {flats && (
            <>
              <BasicTable flats={flats?.flats} />
            </>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default View;
