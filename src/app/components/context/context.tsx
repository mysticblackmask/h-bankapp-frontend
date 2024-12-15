"use client";
import React, { createContext, ReactNode, useState } from "react";
import { UserContextType } from "@/utils/types/components";
import { userData } from "../constants/data";

export const UserContext = createContext<UserContextType>({
  name: userData[1].userid,
  handleName: (e: number) => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>(userData[1].userid);
  const handleName = (value: number) => {
    switch (value) {
      case 1:
        setUser(userData[1].userid);
        break;
      case 2:
        setUser(userData[2].userid);
        break;
      default:
        setUser(userData[3].userid);
        break;
    }
  };
  return (
    <UserContext.Provider value={{ name: user, handleName }}>
      {children}
    </UserContext.Provider>
  );
};
