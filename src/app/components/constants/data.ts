export const optData: string[] = ["Deposit", "Withdraw", "Transfer"];
export const names = ["Jhon", "Smith", "Richard"];
export const userData = {
  1: { userid: "qwe*12345678" },
  2: { userid: "asd*12345678" },
  3: { userid: "zxc*12345678" },
};

export const ChartData: any = {
  series: [
    {
      name: "monthly earnings",
      color: "var(--color-secondary)",
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ],
  chart: {
    id: "total-income",
    type: "area",
    height: 70,
    sparkline: {
      enabled: true,
    },
    group: "sparklines",
    fontFamily: "inherit",
    foreColor: "#adb0bb",
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0,
      opacityTo: 0,
      stops: [20, 180],
    },
  },

  markers: {
    size: 0,
  },
  tooltip: {
    theme: "dark",
    fixed: {
      enabled: true,
      position: "right",
    },
    x: {
      show: false,
    },
  },
};
