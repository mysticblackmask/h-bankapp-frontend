"use client";
import React, { useState, useEffect, useContext } from "react";
import { Navbar, Select, Drawer } from "flowbite-react";
import Profile from "./Profile";
import { Icon } from "@iconify/react";
import MobileSidebar from "../sidebar/MobileSidebar";
import { UserContext } from "@/app/components/context/context";
import { names } from "@/app/components/constants/data";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const [name, setName] = useState<number>(0);

  const handle = useContext(UserContext).handleName;

  return (
    <>
      <header
        className={`sticky top-0 z-[5] ${
          isSticky
            ? "bg-lightgray dark:bg-dark shadow-md fixed w-full"
            : "bg-transparent"
        }`}
      >
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-30 px-4`}
        >
          <div className="flex gap-3 items-center justify-between w-full ">
            <div className="flex gap-2 items-center">
              <span
                onClick={() => setIsOpen(true)}
                className="h-10 w-10 flex text-black dark:text-white text-opacity-65 xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
              >
                <Icon icon="solar:hamburger-menu-line-duotone" height={21} />
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <div>
                <Select
                  id="user"
                  value={name}
                  onChange={(event) => {
                    handle(parseInt(event.target.value));
                    setName(parseInt(event.target.value));
                  }}
                  required
                  className="select-rounded"
                >
                  {names.map((name: string, index: number) => (
                    <option key={index} value={index + 1}>
                      {name}
                    </option>
                  ))}
                </Select>
              </div>
              <Profile />
            </div>
          </div>
        </Navbar>
      </header>

      {/* Mobile Sidebar */}
      <Drawer open={isOpen} onClose={handleClose} className="w-130">
        <Drawer.Items>
          <MobileSidebar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;
