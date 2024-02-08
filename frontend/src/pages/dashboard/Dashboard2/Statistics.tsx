import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

// componets
import StatisticsWidget2 from "../../../components/StatisticsWidget2";
import { maintananceDashboardAsync } from "../../../store/maintanance/MaintananceSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { DashboardType } from "../../../types/MaintananceType";

const Statistics = () => {
  const [statastics, setStatastics] = useState<DashboardType | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(maintananceDashboardAsync("test"))
      .unwrap()
      .then((response) => {
        setStatastics(response);
      });
  }, []);

  return (
    <>
      {statastics && (
        <Row>
          <Col md={6} xl={3}>
            <StatisticsWidget2
              variant="blue"
              description="Pending"
              stats={statastics.pending.toString()}
              icon="fe-aperture"
              counterOptions={{
                prefix: "",
              }}
            />
          </Col>
          <Col md={6} xl={3}>
            <StatisticsWidget2
              variant="warning"
              description="In Progress"
              stats={statastics.in_progress.toString()}
              icon="fa-plug"
            />
          </Col>
          <Col md={6} xl={3}>
            <StatisticsWidget2
              variant="success"
              description="Resolved"
              stats={statastics.close.toString()}
              icon="fe-bar-chart-2"
            />
          </Col>
          <Col md={6} xl={3}>
            <StatisticsWidget2
              variant="success"
              description="Total"
              stats={statastics.total.toString()}
              icon="fe-bar-chart-2"
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Statistics;
