"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/components/context/context";
import HistoryForm from "@/app/components/history/Form";
import { bankTotal, bankHistory } from "@/app/api/service";

const historypage = () => {
  const id = useContext(UserContext).name;

  const [pages, setPages] = useState({ page: 1, total: 0 });

  const [data, setData] = useState([]);

  const [total, setTotal] = useState<number>(0);

  const getTotal = () => {
    bankTotal(id).then((res) => {
      setTotal(parseFloat(res.data));
    });
  };

  useEffect(() => {
    bankHistory(id, pages.page).then((res) => {
      setData(res.data.data);
      setPages({ ...pages, total: res.data.total });
    });
    getTotal();
  }, [pages.page, id]);

  return <HistoryForm {...{ data, total, pages, setPages }} />;
};

export default historypage;
