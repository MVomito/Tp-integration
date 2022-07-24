import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import Kpi from "components/kpi/Kpi";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {
  piechart1Op1,
  barChartOp1,
} from "variables/charts.js";

function Dashboard2() {
  return (
    <>

      <div className="content">
        <Row>
          <Col md="8" sm="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">{barChartOp1.title}</CardTitle>
                <p className="card-category">{barChartOp1.title}</p>
              </CardHeader>
              <CardBody>
                <Bar
                  data={barChartOp1.data}
                  options={barChartOp1.options}
                  width={400}
                  height={200}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <p className="card-category">{piechart1Op1.datasetlabel}</p>
              </CardHeader>
              <CardBody style={{ height: "300px" }}>
                <Pie
                  data={piechart1Op1.data}
                  options={piechart1Op1.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Envoi{" "}
                  <i className="fa fa-circle text-warning" /> Ouverture{" "}
                  <i className="fa fa-circle text-danger" /> Click{" "}
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Graph</CardTitle>
              </CardHeader>
              <CardBody>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>SUJET</td>
                      <td>Envoi</td>
                      <td></td>
                      <td>Ouv.</td>
                      <td>Clics</td>
                      <td></td>
                      <td>Ventes</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#0</td>
                      <td>12-19 mars</td>
                      <td>Sequence 7 mails Article Diction</td>
                      <td>11735</td>
                      <td>3682</td>
                      <td>31,4%</td>
                      <td>1142</td>
                      <td>31,0%</td>
                      <td>12</td>
                      <td>1,1%</td>
                    </tr>
                    <tr>
                      <td>#1</td>
                      <td>2020-03-25</td>
                      <td>En profiter pour nous muscler ?</td>
                      <td>11922</td>
                      <td>1603</td>
                      <td>13,4%</td>
                      <td>256</td>
                      <td>16,0%</td>
                      <td></td>
                      <td>0,0%</td>
                    </tr>
                    <tr>
                      <td>#1b</td>
                      <td>2020-03-25</td>
                      <td>En profiter pour nous muscler ?</td>
                      <td>10646</td>
                      <td>919</td>
                      <td>8,6%</td>
                      <td>124</td>
                      <td>13,5%</td>
                      <td>10</td>
                      <td>8,1%</td>
                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>2020-03-26</td>
                      <td>Nous avons été surpris…</td>
                      <td>11902</td>
                      <td>1676</td>
                      <td>14,1%</td>
                      <td>208</td>
                      <td>12,4%</td>
                      <td>4</td>
                      <td>1,9%</td>
                    </tr>
                    <tr>
                      <td>#3</td>
                      <td>2020-03-27</td>
                      <td>Pour bien profiter de la crise : mon tuyau</td>
                      <td>11887</td>
                      <td>1451</td>
                      <td>12,2%</td>
                      <td>130</td>
                      <td>9,0%</td>
                      <td>18</td>
                      <td>13,8%</td>
                    </tr>
                    <tr>
                      <td>#4</td>
                      <td>2020-03-28</td>
                      <td>2 formations pour le prix d’une</td>
                      <td>11867</td>
                      <td>1331</td>
                      <td>11,2%</td>
                      <td>200</td>
                      <td>15,0%</td>
                      <td></td>
                      <td>0,0%</td>
                    </tr>
                    <tr>
                      <td>#5</td>
                      <td>2020-03-28</td>
                      <td>Retrait de votre droit</td>
                      <td>11852</td>
                      <td>1946</td>
                      <td>16,4%</td>
                      <td>268</td>
                      <td>13,8%</td>
                      <td>34</td>
                      <td>12,7%</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>TOTAL (sauf sequence Prévente)</td>
                      <td>11822</td>
                      <td>3684</td>
                      <td>31,2%</td>
                      <td>976</td>
                      <td>26,5%</td>
                      <td>78</td>
                      <td>8,0%</td>
                    </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>

        </Row>

      </div>
    </>
  );
}

export default Dashboard2;
