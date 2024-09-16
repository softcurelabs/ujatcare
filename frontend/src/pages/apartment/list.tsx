import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Dropdown } from "react-bootstrap";

// components
import PageTitle from "../../components/PageTitle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { noticeAsync, noticeDeleteAsync } from "../../store/notice/NoticeSlice";
import { NoticesType } from "../../types/NoticeType";
import Pagination from "../../components/Pagination";
import { Confirmation } from "../../components/Confirmation";
import { flatAsync } from "../../store/flat/FlatSlice";
import { ApartmentListType } from "../../types/FlatType";
import { apartmentDeleteAsync } from "../../store/apartment/ApartmentSlice";

interface NoticeHighlightType {
  apartments: Array<ApartmentListType> | null;
}
const BasicTable = ({ apartments }: NoticeHighlightType) => {
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
                <th>Name</th>
                <th>No of Suites</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {apartments && apartments.length > 0 ? (
                apartments.map((record, index) => {
                  return (
                    <tr key={index}>
                      <td>{record.id}</td>
                      <td>{record.name}</td>
                      <td>{record.flats.length}</td>
                      <td>
                        <React.Fragment>
                          <>
                            <Dropdown className="btn-group" align="end">
                              <Dropdown.Toggle variant="light" className="table-action-btn btn-sm">
                                <i className="mdi mdi-dots-horizontal"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {" "}
                                <Dropdown.Item href={`suites/${record.id}`}>
                                  <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                  Edit Suites
                                </Dropdown.Item>
                                <Dropdown.Item href={`apartment/${record.id}`}>
                                  <i className="mdi mdi-check-all me-2 text-muted font-18 vertical-middle"></i>
                                  Edit Apartment
                                </Dropdown.Item>
                                <Dropdown.Item
                                  onClick={() => {
                                    setId(record.id);
                                    setShow(true);
                                  }}
                                >
                                  <i className="mdi mdi-delete me-2 text-muted font-18 vertical-middle"></i>
                                  Delete Apartment
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
          message="This will delete all suites under apartments. This can't be undone."
          show={show}
          targetId={id}
          submitForm={(id) => {
            dispatch(apartmentDeleteAsync(id))
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

const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const { apartments } = useSelector((state: RootState) => ({
    apartments: state.Flat.flats,
  }));
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(flatAsync());
  }, [currentPage]);

  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[{ label: "Apartments", path: "/apartment", active: true }]}
        title={"Apartments"}
      />

      <Row>
        <Col lg={12}>
          <Button
            className="waves-effect waves-light mb-3"
            onClick={() => {
              let path = `/apartment/new`;
              navigate(path);
            }}
          >
            <i className="mdi mdi-plus-circle me-1"></i> Add New
          </Button>
          {apartments && (
            <>
              <BasicTable apartments={apartments} />
            </>
          )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default List;
