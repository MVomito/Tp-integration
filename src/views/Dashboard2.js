import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import Kpi from "components/kpi/Kpi";

import {
  Table,
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
  kpi1
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
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "300px" }}>
                <Pie
                  data={piechart1Op1.data}
                  options={piechart1Op1.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
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
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <table class="table table-bordered table-hover table-condensed">
                  <thead>
                    <tr>

                      <td></td>
                      <td></td>
                      <td><strong>SUJET</strong></td>
                      <td><strong>Envoi</strong></td>
                      <td><strong>Ouv</strong></td>
                      <td></td>
                      <td><strong>Clics</strong></td>
                      <td></td>
                      <td><strong>Ventes</strong></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>#1</td>
                      <td>2020-02-20</td>
                      <td>Mangez-vous parfois vos mots ?</td>
                      <td>8450</td>
                      <td>1048</td>
                      <td>12.4%</td>
                      <td>245</td>
                      <td>23,4%</td>
                      <td>12</td>
                      <td>4,9%</td>
                    </tr>
                    <tr>
                      <td>#2</td>
                      <td>2020-02-21</td>
                      <td>Quand soudain tout devient plus clair.</td>
                      <td>8399</td>
                      <td>958</td>
                      <td>11.4%</td>
                      <td>154</td>
                      <td>16,1%</td>
                      <td>5</td>
                      <td>3,2%</td>
                    </tr>
                    <tr>
                      <td>#3</td>
                      <td>2020-02-22</td>
                      <td>Découvrez comment maîtriser votre débit pour…</td>
                      <td>8389</td>
                      <td>573</td>
                      <td>6.8%</td>
                      <td>110</td>
                      <td>19,2%</td>
                      <td>6</td>
                      <td>5,5%</td>
                    </tr>
                    <tr>
                      <td>#4</td>
                      <td>2020-02-23</td>
                      <td>90% des gens qui parlent vite n’obtiendront pas…</td>
                      <td>8374</td>
                      <td>853</td>
                      <td>10.2%</td>
                      <td>104</td>
                      <td>12,2%</td>
                      <td>9</td>
                      <td>8,7%</td>
                    </tr>
                    <tr>
                      <td>#5</td>
                      <td>2020-02-24</td>
                      <td>Parlez vite = ne pas obtenir ce qu'on demande ?</td>
                      <td>7637</td>
                      <td>427</td>
                      <td>5.6%</td>
                      <td>40</td>
                      <td>9,4%</td>
                      <td>6</td>
                      <td>15,0%</td>
                    </tr>
                    <tr>
                      <td>#6</td>
                      <td>2020-02-24</td>
                      <td>Parler moins vite - Dernier jour de l'offre</td>
                      <td>8341</td>
                      <td>625</td>
                      <td>7.5%</td>
                      <td>60</td>
                      <td>9,6%</td>
                      <td>5</td>
                      <td>8,3%</td>
                    </tr>
                    <tr>
                      <td>#7</td>
                      <td>2020-02-24</td>
                      <td>Retrait de votre droit dans 6h</td>
                      <td>8329</td>
                      <td>759</td>
                      <td>9.1%</td>
                      <td>98</td>
                      <td>12,9%</td>
                      <td>19</td>
                      <td>19,4%</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td><strong>TOTAL</strong></td>
                      <td><strong>8450</strong></td>
                      <td><strong>2142</strong></td>
                      <td><strong>25.3%</strong></td>
                      <td><strong>690</strong></td>
                      <td><strong>32,2%</strong></td>
                      <td><strong>50</strong></td>
                      <td><strong>7,2%</strong></td>
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
