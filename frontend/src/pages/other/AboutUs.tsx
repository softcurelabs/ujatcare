import { useState } from "react";
import { Row, Col, Card, Container, FormLabel, Button } from "react-bootstrap";

import LogoLight from "../../assets/images/logo-light.png";
import { Link } from "react-router-dom";

import Loader from "../../components/Loader";

const AboutUs = () => {
  return (
    <Container>
      {/* <PageTitle breadCrumbItems={[]} title={"Create Application"} /> */}
      <Row className="justify-content-center">
        <Col>
          <Container className="container-md">
            <Card className="px-4">
              <Card.Body>
                <Row className="mb-4">
                  <Col lg={2}></Col>
                  <Col lg={3}></Col>
                  <Col lg={2}>
                    <img src={LogoLight} height={"100"} />
                  </Col>
                  <Col lg={3}></Col>
                  <Col lg={2}>
                    <div className="text-right align-middle mb-2">
                      Providing Non-profit Housing For Seniors
                    </div>
                    <div className="fs-6 align-middle mt-2">
                      An Outreach of First Baptist Church
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 className="text-center">Our Story</h2>
                    <p>
                      North Park Manor Society was built on the shoulders of the founding 15
                      pioneers of the First Baptist Church, Victoria BC, in 1876. This was the first
                      Baptist cause inaugurated in British Colombia. In 1877, the Baptist Chapel and
                      North Star Mission were built on Pandora Avenue.
                    </p>
                    <p>
                      The following 100+ years are filled with stories of church members serving
                      their congregation and Victoria, BC. In 1964, the congregation voted to
                      purchase property on Quadra Street between North Park Street and Fisgard
                      Street to build a new church. This new property was more than they needed to
                      home the new church, and the building committee began investigating the
                      possibility of adding low rental apartments to the property. In 1972 the need
                      was great, and the congregation was up for the project.
                    </p>
                    <p>
                      Building low-income housing required the church to establish this project as
                      its own entity under the Societies Act. Much credit goes to Margaret Salmond,
                      Bob Jupe, and Peggy McFadyen for spearheading the government grants for the
                      project. <b>North Park Manor</b> apartment complex was dedicated and opened on
                      April 24, 1976. The 134 bachelor apartments, and 24 one-bedroom apartments
                      continue to be subsidized by BC housing and support the continued need for
                      low-income housing for the 55+ community. <b>Fisgard House</b> was officially
                      dedicated and opened April 30, 1988, providing 52 units of affordable
                      one-bedroom apartments for the 55+ community.
                    </p>
                    <p>
                      North Park Manor Society is grateful for the First Baptist Church vision and
                      generosity. They have made an incredible difference for the city of Victoria
                      and the those that have been blessed to reside in the North Park Manor Society
                      properties. Community support of North Park Manor Society continues to be
                      important in the maintenance of these facilities. Please contact
                      office@northparkmanor.org to volunteer or donate.
                    </p>
                    <p className="fw-bold">APPLICATIONS</p>
                    <p>
                      <ul>
                        <li>Age Requirement - 55+</li>
                        <li>No pets. None smoking property.</li>
                        <li>Rent based on income.</li>
                        <li>Independent living – supportive services are not offered.</li>
                      </ul>
                      <Link to={"/application"}>Complete this online application</Link>
                    </p>
                    <p className="fw-bold">LOCATION</p>
                    <p>
                      <b>North Park Manor</b>
                      <br /> 875 North Park St., Victoria BC, V8W 3B6
                    </p>
                    <p>
                      <b>Fisgard House 844</b>
                      <br />
                      Fisgard St., Victoria BC. V8W 3M5
                    </p>
                    <p>Phone: 250 383-7611</p>
                    <p>
                      <Link to={"/auth/login"}>Staff Login</Link>
                    </p>
                    <p>
                      <Link to={"/auth/customer-login"}>Recident Login</Link>
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutUs;
