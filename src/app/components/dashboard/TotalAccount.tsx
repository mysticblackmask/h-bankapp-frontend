"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Icon } from "@iconify/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ChartData } from "../constants/data";

const TotalAccount = ({ total }: { total: string }) => {
  return (
    <div className="bg-lightsecondary rounded-lg p-6 relative w-full break-words">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-14 h-10 rounded-full flex items-center justify-center  bg-secondary text-white">
            <Icon icon="solar:wallet-2-line-duotone" height={24} />
          </span>
          <h5 className="text-base opacity-70">Current Balance</h5>
        </div>
        <div>
          <Link href="/depowith">
            <span className="h-9 w-9 flex justify-center items-center rounded-full  cursor-pointer">
              <HiOutlineDotsVertical size={22} />
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[24px] items-end mt-10">
        <div className="xl:col-span-8 col-span-7">
          <h2 className="text-3xl mb-3">
            {total === "0" ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-5 bg-gray-400 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              </div>
            ) : (
              `$${total}`
            )}
          </h2>
        </div>
        <div className="xl:col-span-4  col-span-5 ">
          <div className="rounded-bars md:ps-7">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="area"
              height="70px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalAccount;
