"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { addCompanyListService } from "@/app/services/http-services";
import { addCompanyListUrl } from "@/app/services/endpoints";
interface props {
    pagerefress: Function;
}
// type InputCatagory = {
//     name: string;
//     phone: string;
//     email: string;
//     type: string;
// };
type Companylist = {
    name: string;
    phone: number;
    email: string;
    typeOfCompany: string;
};
export default function searchBar({ pagerefress }: props) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Companylist>();
    const dataUpdate: SubmitHandler<Companylist> = async (data) => {
        let getData = await addCompanyListService(addCompanyListUrl, data);
        if (getData?.message == "OK") {
            toast.success("Successfully added");
            pagerefress(true);
            reset();
        } else {
            toast.warn("Something wrong or Email is already used");
        }
    };

    return (
        <div>
            <div>
                <form
                    onSubmit={handleSubmit(dataUpdate)}
                    className="min-w-[800px] w-full h-[50px] grid grid-cols-10 mt-1"
                >
                    <div className="h-full w-full col-span-8 flex justify-center items-center ml-5 gap-3 rounded-md ">
                        <input
                            className=" w-full h-full border-2 pl-3 rounded-md"
                            placeholder="Name Ex: Nahib Vai"
                            type="text"
                            {...register("name", {
                                required: true,
                                minLength: 3,
                            })}
                        />
                        <input
                            className=" w-full h-full border-2 pl-3 rounded-md"
                            placeholder="Phone Ex: 01780******"
                            {...register("phone", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]{11}$/,
                                    message:
                                        "Invalid phone number, must be 10 digits",
                                },
                            })}
                        />
                        <input
                            className=" w-full h-full border-2 pl-3 rounded-md"
                            placeholder="Email Ex: alice@gmail.com"
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        <input
                            className=" w-full h-full border-2 pl-3 rounded-md"
                            placeholder="Type Ex: Food"
                            type="text"
                            {...register("typeOfCompany", {
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
