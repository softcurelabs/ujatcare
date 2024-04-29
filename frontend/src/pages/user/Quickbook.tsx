import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import { quickbookConnect } from "../../store/quickbook/QuickbookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";


const Quickbook = () => {
    const [connect, setConnect] = useState({status: false, url: "#"});
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(quickbookConnect())
          .unwrap()
          .then((response) => {
            setConnect(response);
          });
      }, []);

    return (
        <React.Fragment>
          <PageTitle
            breadCrumbItems={[
              { label: "Dashboard", path: "/dashboard-2" },
            ]}
            title={"Integrations"}
          />
          <Row>
            <Col xl={3}>
            <Card>
              <CardBody>
                <img src="https://digitalasset.intuit.com/content/dam/intuit/qb-design/brand/brand-foundations/logo/qb-logo-preferred-and-alternate-photo.svg" alt="Quickbook conncet"></img>
                { connect && connect.status ? <h2>Connected</h2>: <Button className="waves-effect waves-light mb-3" onClick={() => {window.open(connect.url)}}>
                <i className="mdi mdi-plus-circle me-1"></i> Connect To Quickbook
              </Button>}
              </CardBody>
            </Card>
              
            </Col>
          </Row>
        </React.Fragment>
      );
}

export default Quickbook;
