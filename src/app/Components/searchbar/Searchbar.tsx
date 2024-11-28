"use client";

import { catagoryAddUrl, catagoryUpdate } from "../../services/endpoints";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    catagoryUpdateService,
    catagoryAddService,
} from "@/app/services/http-services";
interface props {
    baroption: string;
    actionstate: {
        id: string;
        catagory: string;
    };
    updatestatus: Function;
}
type InputCatagory = {
    catagory: string;
};
export default function searchBar({
    baroption,
    actionstate,
    updatestatus,
}: props) {
    let [buttonOption, setbuttonOption] = useState<string>("");
    if (baroption !== buttonOption) {
        setbuttonOption(baroption);
    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<InputCatagory>();
    const dataUpdate: SubmitHandler<InputCatagory> = async (data) => {
        if (buttonOption === "UPDATE" && actionstate) {
            try {
                let result = await catagoryUpdateService(
                    `${catagoryUpdate}`,
                    actionstate.id,
                    data.catagory
                );
                if (result.message == "OK") {
                    toast.success("Successfully Updated");
                    updatestatus(true);

                    setbuttonOption("ADD");
                } else {
                    toast.warn("Catagory already exist");
                    updatestatus(true);
                }
            } catch (error) {
                toast.error(`${error}`);
            }
        } else {
            let result = await catagoryAddService(
                `${catagoryAddUrl}`,
                data.catagory
            );

            if (result) {
                if (result.message == "OK") {
                    toast.success("Successfully Added");
                    updatestatus(true);
                    setbuttonOption("ADD");
                } else {
                    toast.warn("Catagory Already Exist");
                }
                reset();
            }
        }
    };

    return (
        <div>
            <div>
                <form
                    onSubmit={handleSubmit(dataUpdate)}
                    className="min-w-[800px] w-full h-[50px] grid grid-cols-6 mt-1"
                >
                    <div className="h-full w-full col-span-4 flex justify-center items-center ml-5 rounded-md ">
                        <input
                            className=" w-full h-full border-2 pl-3 rounded-md"
                            placeholder="Enter the Text"
                            type="text"
                            {...register("catagory", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                    </div>
                    <div className="col-span-2 h-full w-full flex justify-center items-center ">
                        <button
                            type="submit"
                            className="px-3 rounded-md  w-1/2 h-full py-1 gap-x-2 border-1 bg-blue-600 text-white flex justify-around items-center"
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
