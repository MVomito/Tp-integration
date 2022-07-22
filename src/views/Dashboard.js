import Kpi from "components/kpi/Kpi";
import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboardNASDAQChart,
  dashboardNASDAQChart2,
  barChartTDB,
  kpi1,
  kpi2,
  kpi3,
  kpi4,
  kpi5,
  kpi6,
  kpi7,
  kpi8
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi1} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi2} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi3} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi4} />
          </Col>
        </Row>

        <Row>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi5} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi6} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi7} />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Kpi kpi={kpi8} />
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">{dashboardNASDAQChart.title}</CardTitle>
                <p className="card-category">Graphe mensuel Réseaux Sociaux </p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-warning" /> AC-Contact{" "}
                  <i className="fa fa-circle text-primary" /> AC-Ajout{" "}
                  <i className="fa fa-circle text-danger" /> AC-Abandon
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">{dashboardNASDAQChart.title}</CardTitle>
                <p className="card-category">Graphe mensuel Web : Visiteurs</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart2.data}
                  options={dashboardNASDAQChart2.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-warning p-2" /> Facebook{" "}
                  <i className="fa fa-circle  text-primary p-2" /> Linkedin{" "}
                  <i className="fa fa-circle text-danger p-2" /> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">{barChartTDB.title}</CardTitle>
                <p className="card-category">Diagram mensuel: Ventes</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={barChartTDB.data}
                  options={barChartTDB.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info p-2" /> Tesla Model S{" "}
                  <i className="fa fa-circle  p-2" /> BMW 5 Series{" "}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
