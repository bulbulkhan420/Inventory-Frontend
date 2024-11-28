"use client";
import React, { useState } from "react";
import { FiEdit, MdDelete } from "../icons/icon";

import { toast } from "react-toastify";
import { CompanyUpdate } from "./companyUpdate";
import { deleteCompanyService } from "@/app/services/http-services";
import { deleteCompanyUrl } from "@/app/services/endpoints";

type Props = {
    company: {
        name: string;
        phone: number;
        email: string;
        typeOfCompany: string;
    };
    pagerefress: Function;
};

export default function CompanyCard({ company, pagerefress }: Props) {
    let [popUp, setpopUp] = useState<boolean>(false);
    if (company) {
        console.log(company);
    }

    let editItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setpopUp(true);
    };
    let deleteItem = async () => {
        let result: any = await deleteCompanyService(
            `${deleteCompanyUrl}/${company?.email}`
        );
        if (result.message == "OK") {
            toast.success("successfully Deleted");
            pagerefress(true);
        } else {
            toast.warn("Something Wrong");
        }
    };
    return (
        <div>
            <div className={!popUp ? "hidden" : ""}>
                <CompanyUpdate
                    setpopUp={setpopUp}
                    company={company}
                    pagerefress={pagerefress}
                />
            </div>
            <div className="h-[50px] grid grid-cols-10 my-1 border-b-2 pb-2 ">
                <div className="col-span-2 text-center flex justify-center items-center">
                    {company?.name}
                </div>
                <div className="col-span-2 text-center flex justify-center items-center">
                    {company?.phone}
                </div>
                <div className="col-span-2 text-center flex justify-center items-center">
                    {company?.email}
                </div>
                <div className="col-span-2 text-center flex justify-center items-center">
                    {company?.typeOfCompany}
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
