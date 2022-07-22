
import React from "react";
import { Col, Row, Card, CardBody, CardTitle, CardFooter } from "reactstrap";

function Kpi(props) {
  return (
    <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className={props.kpi.icon} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">{props.kpi.title}</p>
                      <CardTitle tag="p">{props.kpi.value}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i/> {props.kpi.legende}
                </div>
              </CardFooter>
            </Card>
  );
}

export default Kpi;
