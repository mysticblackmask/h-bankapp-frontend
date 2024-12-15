import React from "react";
import Link from "next/link";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { FormProps } from "@/utils/types/components";
import { optData } from "../constants/data";

function Form({
  opt,
  transData,
  loading,
  data,
  handleAmount,
  handleData,
  handleOpt,
}: FormProps) {
  return (
    <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words overflow-x-auto">
      <h5 className="card-title">My Account ${opt.total.toLocaleString()}</h5>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-30">
          <div className="col-span-12">
            <div className="flex flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Type" />
                </div>
                <Select
                  id="type"
                  value={opt.opt}
                  onChange={(event) => {
                    handleOpt(parseInt(event.target.value));
                  }}
                  required
                  className="select-rounded"
                >
                  {optData.map((opt: string, index: number) => (
                    <option key={index} value={index}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </div>
              {opt.opt === 2 ? (
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="CardID" />
                  </div>
                  <TextInput
                    id="card"
                    type="text"
                    placeholder="wey*92736123"
                    required
                    value={data.card}
                    className="form-control"
                    onChange={(event) => handleData(event.target.value, "card")}
                  />
                </div>
              ) : null}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="amount" value="Amount $" />
                </div>
                <TextInput
                  id="amount"
                  type="number"
                  required
                  min={1}
                  max={opt.opt === 0 ? undefined : opt.total}
                  value={data.amount}
                  placeholder="400"
                  className="form-control"
                  onChange={(event) => {
                    handleAmount(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 flex gap-3 mt-3 justify-center">
            <Button
              isProcessing={loading}
              color={"success"}
              onClick={transData}
            >
              Submit
            </Button>
            <Button color={"error"}>
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
