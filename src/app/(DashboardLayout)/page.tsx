"use client";
import React, { useContext, useEffect, useState } from "react";
import TotalFollowers from "../components/dashboard/TotalFollowers";
import TotalAccount from "../components/dashboard/TotalAccount";
import { Reports } from "../components/dashboard/Reports";
import { UserContext } from "../components/context/context";
import { bankDash } from "../api/service";

const page = () => {
  const id = useContext(UserContext).name;
  const [data, setData] = useState({
    data: [],
    rela: { send: "", receive: "" },
    total: "0",
  });
  useEffect(() => {
    bankDash(id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    <div className="grid grid-cols-12 gap-30">
      <div className="lg:col-span-8 col-span-12">
        <Reports {...{ data: data.data }} />
      </div>
      <div className="lg:col-span-4 col-span-12">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 mb-30">
            <TotalAccount {...{ total: data.total }} />
          </div>
          <div className="col-span-12 mb-30">
            <TotalFollowers {...{ data: data.rela.receive, text: "Income" }} />
          </div>
          <div className="col-span-12">
            <TotalFollowers {...{ data: data.rela.send, text: "Expense" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
