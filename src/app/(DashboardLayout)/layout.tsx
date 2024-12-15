"use client";
import React, { Suspense } from "react";
import Sidebar from "./layout/vertical/sidebar/Sidebar";
import Header from "./layout/vertical/header/Header";
import Loading from "./loading";
import { UserProvider } from "../components/context/context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <div className="flex w-full min-h-screen">
        <div className="page-wrapper flex w-full">
          <Sidebar />
          <div className="body-wrapper w-full bg-lightgray dark:bg-dark">
            <Header />
            <div className={`container mx-auto  py-30`}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
