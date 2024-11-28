"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="flex flex-row justify-between h-20 mx-10 items-center box-border bg-green-700">
            <div className="flex flex-row justify-center text-sm gap-4">
                <div className=" px-3 py-2 hover:text-gray-400  rounded-full border-gray-950 transform bg-bg-navbar duration-1000 ">
                    <Link href={"/catagory"}>Catagory</Link>
                </div>
                <div className="px-3 py-2 hover:text-gray-400 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 ">
                    <Link href={"/products"}>Products</Link>
                </div>
                <div className="px-3 py-2 hover:text-gray-400 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 ">
                    <Link href={"/company"}>Company</Link>
                </div>
            </div>
        </div>
    );
}
