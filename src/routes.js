import Dashboard  from  "views/Dashboard.js";
import Dashboard2 from "views/Dashboard2.js";
import Dashboard3 from "views/Dashboard3.js";
import Dashboard4 from "views/Dashboard4.js";

var routes = [
  {
    path: "/dashboard",
    name: "Tableau de Bord",
    icon: "nc-icon nc-controller-modern",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/operation1",
    name: "operation 1",
    icon: "nc-icon nc-chart-pie-36",
    component: Dashboard2,
    layout: "/admin2",
  },

  {
    path: "/operation2",
    name: "operation 2",
    icon: "nc-icon nc-chart-bar-32",
    component: Dashboard3,
    layout: "/admin2",
  },

  {
    path: "/Bilan",
    name: "Bilan opération",
    icon: "nc-icon nc-bus-front-12",
    component: Dashboard4,
    layout: "/admin2",
  },

];
export default routes;
