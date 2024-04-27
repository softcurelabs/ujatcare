import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Button, Col, Row } from "react-bootstrap";
import { quickbookConnect, quickbookTryConnect } from "../../store/quickbook/QuickbookSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useSearchParams } from "react-router-dom";


const QuickbookConnect = () => {
    const [connect, setConnect] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(quickbookTryConnect({
            code: searchParams.get('code'),
            realmId: searchParams.get('realmId')
        }))
          .unwrap()
          .then((response) => {
            if (response?.status) {
                setConnect(connect);
            }
          });
      }, []);

    if (connect) {
        window.close();
    }

    return (
        <React.Fragment>
          <PageTitle
            breadCrumbItems={[
              { label: "Dashboard", path: "/dashboard-2" },
              { label: "Payment Setup", path: "/notice/new", active: true },
            ]}
            title={"QuickBook Connect"}
          />
    
          <Row>
            <Col>
            </Col>
          </Row>
        </React.Fragment>
      );
}

export default QuickbookConnect;