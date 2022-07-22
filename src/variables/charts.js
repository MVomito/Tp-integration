
const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 200, 400, 289, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 160, 320, 335, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 324, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

const piechart1Op1 = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#eaccfg", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const piechart1Op2 = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const piechart2Op2 = {
  data: (canvas) => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2,
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};


const dashboardNASDAQChart = {
  data: (canvas) => {
    return {
      labels: [
        "2018-01",
        "2018-02",
        "2018-03",
        "2018-04",
        "2018-05",
        "2018-06",
        "2018-07",
        "2018-08",
        "2018-09",
        "2018-03",
        "2018-11",
        "2018-12",
        "2019-01",
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
        "2019-07",
        "2019-08",
        "2019-09",
        "2019-10",
        "2019-11",
        "2019-12",
        "2020-01",
        "2020-02",
        "2020-03",
        "2020-04",
        "2020-05",
        "2020-06"

      ],

      datasets: [
        {
          data: [
            ,
            ,
            ,
            8321,
            8544,
            9472,
            9816,
            10019,
            10321,
            10539,
            10896,
            11158,
            11520,
            11843,
            12212,
            12544,
            13280,
            13828,
            14075,
            14227,
            14430,
            14743,
            14954,
            15138,
            15325,
            15537,
            15819,
            16122


            ,],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [

            ,
            ,
            ,
            191,
            136,
            93,
            246,
            1034,
            100,
            402,
            301,
            201,
            149,
            72,
            225,
            109,
            177,
            87,
            301,
            126,
            225,
            86,
            130,
            214,
            271,
            373,
            303,


          ],


          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },

        {
          data: [
            ,
            ,
            ,
            ,
            191,
            136,
            93,
            246,
            1034,
            100,
            402,
            301,
            201,
            149,
            72,
            225,
            109,
            177,
            87,
            301,
            126,
            225,
            86,
            130,
            214,
            271,
            373,
            303,

          ],

          fill: false,
          borderColor: "#ff0000 ",
          backgroundColor: "transparent",
          pointBorderColor: "#ff0000 ",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

const dashboardNASDAQChart2 = {
  data: (canvas) => {
    return {
      labels: [
        "2018-01",
        "2018-02",
        "2018-03",
        "2018-04",
        "2018-05",
        "2018-06",
        "2018-07",
        "2018-08",
        "2018-09",
        "2018-03",
        "2018-11",
        "2018-12",
        "2019-01",
        "2019-02",
        "2019-03",
        "2019-04",
        "2019-05",
        "2019-06",
        "2019-07",
        "2019-08",
        "2019-09",
        "2019-10",
        "2019-11",
        "2019-12",
        "2020-01",
        "2020-02",
        "2020-03",
        "2020-04",
        "2020-05",
        "2020-06"
      ],
      datasets: [
        {
          data: [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            11440,
            4600,
            17210,
            4208,
            7998,
            3566,
            17288,
            5094,
            9604,
            5788,
            7514,
            9206,
            9600,
            9834,
            5470
          ],
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            22587,
            23000
          ],
          fill: false,
          borderColor: "#51CACF",
          backgroundColor: "transparent",
          pointBorderColor: "#51CACF",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
        {
          data: [
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            562,
            589
          ],
          fill: false,
          borderColor: "#ff0000 ",
          backgroundColor: "transparent",
          pointBorderColor: "#ff0000 ",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
          tension: 0.4,
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
    },
  },
};

const barChartTDB = {
  data: (canvas) => {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          label: 'BMW 5 series',
          data: [200, 229, 316, 322, 330, 326, 400],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Tesla Model S',
          data: [322, 330, 326, 333, 345, 338, 354],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,

        text: '2014 Sales',
      },
    },
  }
};

const barChartOp1 = {
  data: (canvas) => {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          label: 'BMW 5 series',
          data: [200, 229, 316, 322, 330, 326, 400],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Tesla Model S',
          data: [322, 330, 326, 333, 345, 338, 354],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,

        text: '2014 Sales',
      },
    },
  }
};

const barChartOp2 = {
  data: (canvas) => {
    return {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          label: 'BMW 5 series',
          data: [200, 229, 316, 322, 330, 326, 400],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Tesla Model S',
          data: [322, 330, 326, 333, 345, 338, 354],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,

        text: '2014 Sales',
      },
    },
  }
};

const kpi1 = {
  title: "Revenu",
  value: "5400$",
  unit: "",
  legende: "Revenu mensuel",
  icon: "nc-icon nc-money-coins text-danger",
}
const kpi2 = {
  title: "Abonnée AC",
  value: "$10 345",
  unit: "",
  legende: "150 nouveaux contact",
  icon: "nc-icon nc-email-85 text-success",
}
const kpi3 = {
  title: "Viseteurs",
  value: "23 000",
  unit: "",
  legende: "+ 42 visiteurs",
  icon: "nc-icon nc-globe text-dark",
}
const kpi4 = {
  title: "Visites",
  value: "40 000",
  unit: "",
  legende: "-541 pages vues",
  icon: "nc-icon nc-paper",
}
const kpi5 = {
  title: "Abonnées YT",
  value: "5 400",
  unit: "",
  legende: "+ 457 Nouveaux Abonnées",
  icon: "nc-icon nc-button-play text-danger",
}
const kpi6 = {
  title: "Abonnes FB",
  value: "2 451",
  unit: "",
  legende: "+ 548 Nouveaux Abonnées",
  icon: "nc-icon nc-planet text-primary",
}
const kpi7 = {
  title: "Contact Linkedin",
  value: "23 000",
  unit: "",
  legende: "+ 548 Nouveaux Abonnées",
  icon: "nc-icon nc-calendar-60 text-warning",
}
const kpi8 = {
  title: "Instagram",
  value: "589",
  unit: "",
  legende: "+ 1542",
  icon: "nc-icon nc-camera-compact text-primary",
}

module.exports = {
  dashboard24HoursPerformanceChart,
  piechart1Op1,
  piechart1Op2,
  piechart2Op2,
  dashboardNASDAQChart,
  dashboardNASDAQChart2,
  barChartTDB,
  barChartOp1,
  barChartOp2,
  kpi1,
  kpi2,
  kpi3,
  kpi4,
  kpi5,
  kpi6,
  kpi7,
  kpi8
};
