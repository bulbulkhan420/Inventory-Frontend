import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { updateCompanyService } from "../../services/http-services";

import { toast } from "react-toastify";
import { updateCompanyUrl } from "@/app/services/endpoints";

type InputCatagory = {
    name: string;
    phone: number;
    email: string;
    typeOfCompany: string;
};
type props = {
    setpopUp: Function;
    company: InputCatagory;
    pagerefress: Function;
};
export const CompanyUpdate = ({ setpopUp, company, pagerefress }: props) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<InputCatagory>();

    let updatecatagory: SubmitHandler<InputCatagory> = async (data) => {
        let result = await updateCompanyService(`${updateCompanyUrl}`, data);
        if (result.message == "OK") {
            toast.success("Successfully Updated");
            setpopUp(false);
            pagerefress(true);
        } else {
            toast.warn("Something wrong");
        }
    };
    return (
        <div>
            <div className="w-screen h-screen  flex justify-center items-center bg-black bg-opacity-30 fixed z-20 top-0 left-0">
                <form
                    onSubmit={handleSubmit(updatecatagory)}
                    className=" bg-gray-200 shadow-md w-[400px] h-auto p-20 rounded-md flex justify-center items-center gap-y-4 flex-col"
                >
                    <input
                        className="w-full h-[40px] rounded-md text-center border-2"
                        type="text"
                        {...register("name", {
                            required: true,
                            minLength: 3,
                        })}
                        defaultValue={company?.name}
                    />
                    <input
                        className="w-full h-[40px] rounded-md text-center border-2"
                        {...register("phone", {
                            required: true,
                            pattern: {
                                value: /^[0-9]{11}$/,
                                message:
                                    "Invalid phone number, must be 10 digits",
                            },
                        })}
                        defaultValue={company?.phone}
                    />
                    <input
                        className="w-full h-[40px] rounded-md text-center border-2"
                        readOnly
                        {...register("email", {
                            required: true,

                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address",
                            },
                        })}
                        defaultValue={company?.email}
                    />
                    <input
                        className="w-full h-[40px] rounded-md text-center border-2"
                        type="text"
                        {...register("typeOfCompany", {
                            required: true,
                            minLength: 3,
                        })}
                        defaultValue={company?.typeOfCompany}
                    />
                    <button
                        type="submit"
                        className="w-full h-[40px] rounded-md bg-blue-600 text-white flex justify-center items-center"
                    >
                        Update
                    </button>
                    <div
                        onClick={() => {
                            setpopUp(false);
                        }}
                        className=" hover:cursor-pointer w-full h-[40px] rounded-md bg-blue-600 text-white flex justify-center items-center"
                    >
                        Cancel
                    </div>
                </form>
            </div>
        </div>
    );
};
