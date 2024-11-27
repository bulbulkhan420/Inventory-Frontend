"use client";
import React, { useState } from "react";
import { FiEdit, MdDelete } from "./icons/icon";

import { deleteUrl } from "../services/endpoints";
import { toast } from "react-toastify";
import { catagoryDeleteService } from "../services/http-services";
import { CatagoryUpdate } from "./catagoryUpdate";

type Props = {
    id: string;
    catagory: string;
    barstatus: string;
    setbarstatus: Function;
    passingToNavbar: Function;
    updatestatus: Function;
};

export default function ({
    id,
    catagory,
    barstatus,
    setbarstatus,
    passingToNavbar,
    updatestatus,
}: Props) {
    let [catagoryId, setcatagoryId] = useState<string>("");
    let [catagoryName, setcatagoryName] = useState<string>("");
    let [updateBar, setupdatebar] = useState<boolean>(true);
    let updateBarfunc = (status: boolean) => {
        setupdatebar(true);
    };
    let editItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (barstatus === "ADD") {
            setbarstatus("UPDATE");
        }
        setcatagoryId(id);
        setcatagoryName(catagory);
        passingToNavbar({ id, catagory });
        setupdatebar(false);
    };
    let deleteItem = async () => {
        let result = await catagoryDeleteService(`${deleteUrl}/${id}`);

        if (result.message == "OK") {
            toast.success("Successfully Deleted");
            updatestatus(true);
        } else {
            toast.warn("Something error to deletion");
        }
    };
    return (
        <div>
            <div className={`${updateBar ? "hidden" : ""}`}>
                <CatagoryUpdate
                    catagoryId={catagoryId ? catagoryId : ""}
                    catagoryName={catagoryName ? catagoryName : ""}
                    updateBarfunc={updateBarfunc}
                    updatestatus={updatestatus}
                />
            </div>

            <div className="h-[50px] grid grid-cols-4 my-1 border-b-2 pb-2 ">
                <div className="col-span-1 text-center flex justify-center items-center">
                    {id}
                </div>
                <div className="col-span-1 text-center flex justify-center items-center">
                    {catagory}
                </div>
                <div className="col-span-2 gap-x-3 flex justify-center items-center w-full">
                    <button
                        onClick={editItem}
                        className="px-3 transform duration-700 py-2 gap-x-2 border-2 flex justify-around text-red-900  items-center rounded-lg hover:text-red-400"
                    >
                        <FiEdit /> Edit
                    </button>
                    <button
                        onClick={deleteItem}
                        className="px-3 transform duration-700 py-2 gap-x-2 border-2 flex justify-around items-center text-red-900 rounded-lg hover:text-red-400"
                    >
                        <MdDelete /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
