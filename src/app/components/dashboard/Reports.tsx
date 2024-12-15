"use client";
import React, { FC } from "react";
import { Icon } from "@iconify/react";
import { Badge } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { ReportsProps } from "@/utils/types/components";
import { Style } from "../constants/functions";
import Skeleton from "../Skeleton";

export const Reports: FC<ReportsProps> = ({ data }) => {
  return (
    <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="flex items-center justify-between">
        <h5 className="card-title">Account Reports</h5>
        <Link href="/history">
          <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
            <HiOutlineDotsVertical size={22} />
          </span>
        </Link>
      </div>
      <div className="flex flex-col mt-2">
        {data.length === 0 ? (
          <Skeleton />
        ) : (
          data.map((item, index) => (
            <div
              className="flex items-center justify-between py-5 border-b border-ld"
              key={index}
            >
              <div className="flex gap-3 items-center">
                <span
                  className={`w-14 h-10 rounded-full flex items-center justify-center  ${
                    Style(item.type).color
                  } ${Style(item.type).text}`}
                >
                  <Icon icon={Style(item.type).icon} height={24} />
                </span>
                <div>
                  <h4 className="text-sm mb-1 capitalize">{item.type}</h4>
                  <p className="text-darklink text-xs flex items-center gap-1">
                    {item.date}{" "}
                    <Icon
                      icon="material-symbols:info-outline-rounded"
                      height={13}
                    />
                  </p>
                </div>
              </div>
              <Badge
                icon={() => (
                  <Icon
                    icon={
                      item.type === "withdraws" || item.type === "send"
                        ? "solar:alt-arrow-down-bold"
                        : "solar:alt-arrow-up-bold"
                    }
                    className="me-1"
                    height={12}
                  />
                )}
                className={
                  item.type === "withdraws" || item.type === "send"
                    ? "bg-lighterror text-error"
                    : "bg-lightsuccess text-success"
                }
              >
                ${item.amount}
              </Badge>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
