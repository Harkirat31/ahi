'use client'


import { useState } from "react";


import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
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
        <div className="mx-auto flex font-bold w-full justify-between px-4 py-5">
            {/* left side  */}
            <section className="flex items-center gap-10">
                {/* logo */}
                {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
                <div className="hidden md:flex items-center gap-4 transition-all">
                    {navItems.map((d, i) => (
                        <Link
                            key={i}
                            href={d.link ?? "#"}
                            className="relative group  px-2 py-3 transition-all "
                        >
                            <p className="flex cursor-pointer items-center gap-2  group-hover:text-black ">
                                <span>{d.label}</span>
                                {d.children && (
                                    <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                                )}
                            </p>

                            {/* dropdown */}
                            {d.children && (
                                <div className="absolute   left-0  top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-black py-3 shadow-md  transition-all group-hover:flex ">
                                    {d.children.map((ch, i) => (
                                        <Link
                                            key={i}
                                            href={ch.link ?? "#"}
                                            className=" flex cursor-pointer items-center  py-1 pl-6 pr-8   hover:text-black  "
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

            {/* right side data */}
            <section className=" hidden md:flex   items-center gap-8 ">
                <button className="h-fit  transition-all hover:text-black/90">
                    Login
                </button>

                <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2  transition-all hover:border-black hover:text-black/90">
                    Register
                </button>
            </section>

            <FiMenu
                onClick={openSideMenu}
                className="cursor-pointer text-4xl md:hidden"
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
                        <SingleNavItem
                            key={i}
                            label={d.label}
                            link={d.link}
                        >
                            {d.children}
                        </SingleNavItem>
                    ))}
                </div>

                <section className="  flex  flex-col   gap-8  mt-4 items-center">
                    <button className="h-fit transition-all hover:text-black/90">
                        Login
                    </button>

                    <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2  transition-all hover:border-black hover:text-black/90">
                        Register
                    </button>
                </section>
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
                {d.children && (
                    // rotate-180
                    <IoIosArrowDown
                        className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
                    />
                )}
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
                            {/* image */}
                            {/* item */}
                            <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </Link>
    );
}