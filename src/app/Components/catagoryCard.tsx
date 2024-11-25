"use client";
import React from "react";
import { FiEdit, MdDelete } from "./icons/icon";
type Props = {
    id: string;
    catagory: string;
    barstatus: string;
    setbarstatus: Function;
};

export default function ({ id, catagory, barstatus, setbarstatus }: Props) {
    let editItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (barstatus === "ADD") {
            setbarstatus("UPDATE");
        } else {
            setbarstatus("ADD");
        }
    };
    return (
        <div>
            <div className="h-[50px] grid grid-cols-4 ">
                <div className="col-span-1 text-center flex justify-center items-center">
                    {id}
                </div>
                <div className="col-span-1 text-center flex justify-center items-center">
                    {catagory}
                </div>
                <div className="col-span-2 gap-x-3 flex justify-center items-center w-full">
                    <button
                        onClick={editItem}
                        className="px-3 py-2 gap-x-2 border-2 flex justify-around items-center"
                    >
                        <FiEdit /> Edit
                    </button>
                    <button className="px-3 py-2 gap-x-2 border-2 flex justify-around items-center">
                        <MdDelete /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
}