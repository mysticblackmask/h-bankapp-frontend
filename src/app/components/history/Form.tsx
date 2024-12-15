import React from "react";
import { Table, Pagination, Badge } from "flowbite-react";
import { Icon } from "@iconify/react";
import { HistoryFormProps, historyType } from "@/utils/types/components";
import { Style } from "../constants/functions";

const HistoryForm = ({ data, total, pages, setPages }: HistoryFormProps) => {
  return (
    <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="p-6">
        <h5 className="card-title">Current Balance</h5>
        {total === 0 ? (
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
          </div>
        ) : (
          <p className="card-subtitle">$ {total.toLocaleString()}</p>
        )}
        <div className="flex overflow-x-auto sm:justify-end justify-items-end">
          <Pagination
            currentPage={pages.page}
            onPageChange={(number) => {
              setPages({ ...pages, page: number });
            }}
            totalPages={pages.total}
            nextLabel=">"
            previousLabel="<"
          ></Pagination>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-6">Balance</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Transaction ID</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder ">
            {data.length !== 0
              ? data.map((item: historyType, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div className="line-clamp-2 sm:text-wrap">
                        <h6>$ {item.balance}</h6>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap ps-6">
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
                        $ {item.amount}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div className="flex gap-3 items-center">
                        <div>
                          <h4 className="text-sm mb-1 capitalize">
                            {item.type}
                          </h4>
                        </div>
                        <span
                          className={`w-14 h-10 rounded-full flex items-center justify-center  ${
                            Style(item.type).color
                          } ${Style(item.type).text}`}
                        >
                          <Icon icon={Style(item.type).icon} height={24} />
                        </span>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div>
                        <p className="truncat line-clamp-2 sm:text-wrap">
                          {item.id}
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div>
                        <p className="truncat line-clamp-2 sm:text-wrap">
                          {item.date}
                        </p>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))
              : new Array(5).fill(0).map((e, index) => (
                  <Table.Row key={index}>
                    {new Array(5).fill(0).map((e, ind) => (
                      <Table.Cell key={ind}>
                        <div className="flex items-center justify-between mb-5 mt-5">
                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        </div>
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default HistoryForm;
