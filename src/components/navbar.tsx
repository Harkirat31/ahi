"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "@/lib/constants/constants";

export default function Navbar() {
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto  flex font-bold w-full justify-end px-1  py-2">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-[2vw] transition-all text-[1.75vw] sm:text-[1.25vw]">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group hover:bg-black/15  px-2 py-2  "
            >
              <p className="flex cursor-pointer items-center gap-2  group-hover:underline underline-offset-8 decoration-red-600 decoration-4 ">
                <span>{d.label}</span>
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   left-0  mt-2 hidden w-auto  flex-col gap-1   rounded-lg  ahi-theme-color py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center hover:bg-black/40  py-1 pl-6 pr-8"
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-2xl sm:text-3xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] ahi-theme-color px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative  px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 group-hover:text-black ">
        <span>{d.label}</span>
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-black py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  hover:text-black  "
            >
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
