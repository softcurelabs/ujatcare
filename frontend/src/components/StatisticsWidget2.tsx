import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

interface StatisticsWidgetProps {
  variant: string;
  description: string;
  stats: string;
  icon: string;
  counterOptions?: any;
}

const StatisticsWidget2 = (props: StatisticsWidgetProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col className="col-6">
              <div
                className={classNames(
                  "avatar-sm",
                  "rounded",
                  "bg-" + props["variant"]
                )}
              >
                <i
                  className={classNames(
                    props["icon"],
                    "avatar-title font-22 text-white"
                  )}
                ></i>
              </div>
            </Col>
            <Col className="col-6">
              <div className="text-end">
                <h3 className="text-dark my-1">
                  <span>
                    <CountUp
                      duration={1}
                      end={props["stats"]}
                      {...props["counterOptions"]}
                    />
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">
                  {props["description"]}
                </p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default StatisticsWidget2;
