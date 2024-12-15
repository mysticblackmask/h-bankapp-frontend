"use client";
import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Icon } from "@iconify/react";
import { TotalFollowersProps } from "@/utils/types/components";

const TotalFollowers = ({ data, text }: TotalFollowersProps) => {
  const ChartData: any = {
    series: [
      {
        name: "1",
        data: [29, 52, 38, 47, 56],
      },
      {
        name: "2",
        data: [71, 71, 71, 71, 71],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "bar",
      height: 100,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 1,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: [
      `var(--color-${text === "Income" ? "success" : "error"})`,
      "var(--color-black, rgba(17, 28, 45, 0.10))",
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: [3],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    legend: {
      show: false,
    },
  };
  return (
    <div
      className={`${
        text === "Income" ? "bg-lightsuccess" : "bg-lighterror"
      } rounded-lg p-6 relative w-full break-words`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`w-14 h-10 rounded-full flex items-center justify-center ${
              text === "Income" ? "bg-success" : "bg-error"
            } text-white`}
          >
            <Icon icon="solar:money-bag-bold-duotone" height={24} />
          </span>
          <h5 className="text-base opacity-70">Total {text}</h5>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[24px] items-end mt-3">
        <div className="xl:col-span-6 col-span-7">
          <h2 className="text-3xl mb-3">
            {data === "" ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-5 bg-gray-400 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </div>
            ) : (
              `$${data}`
            )}
          </h2>
        </div>
        <div className="xl:col-span-6  col-span-5 ">
          <div className="rounded-bars md:ps-7">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="bar"
              height="100px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalFollowers;
