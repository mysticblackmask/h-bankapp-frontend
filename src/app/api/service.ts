import axios from "axios";
import { optData } from "@/app/components/constants/data";
import { dataType } from "@/utils/types/components";

export const bankTotal = (id: string) => {
  return axios.get(`/api/bank/${id}/total`);
};

export const bankSendData = (
  id: string,
  data: dataType,
  opt: { opt: number }
) => {
  return axios.post(`/api/bank/${id}/${optData[opt.opt].toLowerCase()}`, {
    cardId: data.card,
    amount: data.amount,
  });
};

export const bankHistory = (id: string, page: number) => {
  return axios.post(`/api/bank/${id}/history`, {
    page: page,
  });
};

export const bankDash = (id: string) => {
  return axios.get(`/api/dash/${id}`);
};
