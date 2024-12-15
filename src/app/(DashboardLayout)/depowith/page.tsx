"use client";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "@/app/components/context/context";
import { dataType } from "@/utils/types/components";
import Form from "@/app/components/deposwith/Form";
import { bankTotal, bankSendData } from "@/app/api/service";

const depowithpage = () => {
  const id = useContext(UserContext).name;

  const initialData = { card: "", amount: 0 };

  const [opt, setOpt] = useState({ opt: 0, total: 0 });

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<dataType>(initialData);

  const getTotal = () => {
    bankTotal(id).then((res) => {
      setOpt({ ...opt, total: parseFloat(res.data) });
    });
  };

  useEffect(() => {
    getTotal();
  }, [opt.opt, id]);

  const transData = () => {
    setLoading(true);
    if (data.card === id) {
      setData({ ...data, card: "" });
      setLoading(false);
      return alert("correct ID");
    }
    if (!data.amount || data.amount <= 0) {
      setData({ ...data, amount: 0 });
      setLoading(false);
      return alert("More than $1");
    }

    bankSendData(id, data, opt)
      .then((res) => {
        getTotal();
        setData(initialData);
      })
      .catch((err) => alert(err.response.data.msg))
      .finally(() => setLoading(false));
  };

  const handleData = (value: string, type: string) => {
    switch (type) {
      case "card":
        setData({ ...data, card: value });
        break;
      default:
        setData({ ...data, amount: parseFloat(value) });
        break;
    }
  };

  const handleOpt = (value: number) => {
    setOpt({ ...opt, opt: value });
  };

  const handleAmount = (val: string) => {
    const value = parseFloat(val);
    const max = opt.opt === 0 ? undefined : opt.total;
    if (max !== undefined && value > max) {
      val = max.toString();
      handleData(max + "", "amount");
    } else {
      if (value < 0) handleData("1", "amount");
      else handleData(value + "", "amount");
    }
  };

  return (
    <Form
      {...{
        opt,
        data,
        loading,
        transData,
        handleAmount,
        handleData,
        handleOpt,
      }}
    />
  );
};

export default depowithpage;
