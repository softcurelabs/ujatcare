import { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

import AppMenu from "../../../layouts/Menu";
import { getCustomerItems } from "../../../helpers/menu";
import { useTranslation } from "react-i18next";
import NoticeHighlight from "./NoticeHighlight";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { noticeHighlightAsync } from "../../../store/notice/NoticeSlice";

const Dashboard1 = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { notices } = useSelector((state: RootState) => ({
    notices: state.Notice.notices,
  }));

  useEffect(() => {
    dispatch(noticeHighlightAsync(1));
  }, []);

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Dashboard</h4>
          </div>
        </Col>
      </Row>

      {/* <Statistics /> */}

      <Row>
        <Col xl={6}>
          <Card className="widget-rounded-circle">
            <Card.Body>
              <AppMenu menuItems={getCustomerItems()} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>{notices && <NoticeHighlight noticeHighlights={notices} />}</Col>
      </Row>
    </>
  );
};

export default Dashboard1;
