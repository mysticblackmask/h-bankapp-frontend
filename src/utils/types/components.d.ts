export interface dataType {
  card: string;
  amount: number | undefined;
}

export interface FormProps {
  opt: {
    opt: number;
    total: number;
  };
  transData: () => void;
  loading: boolean;
  data: dataType;
  handleAmount: (e: string) => void;
  handleOpt: (v: number) => void;
  handleData: (e: string, type: string) => void;
}

export interface historyType {
  balance: string;
  amount: string;
  date: string;
  id: string;
  type: string;
}

export interface HistoryFormProps {
  data: historyType[];
  total: number;
  pages: {
    page: number;
    total: number;
  };
  setPages: React.Dispatch<
    React.SetStateAction<{
      page: number;
      total: number;
    }>
  >;
}

export interface Report {
  amount: string;
  balance: string;
  date: string;
  id: string;
  type: string;
}

export interface ReportsProps {
  data: Report[];
}

export interface TotalFollowersProps {
  data: string;
  text: string;
}

export interface UserContextType {
  name: string;
  handleName: (e: number) => void;
}
