import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { catagoryUpdateService } from "../../services/http-services";
import { catagoryUpdate } from "../../services/endpoints";
import { toast } from "react-toastify";
type props = {
    catagoryId: string;
    catagoryName: string;
    updateBarfunc: Function;
    updatestatus: Function;
};
type InputCatagory = {
    catagory: string;
};
export const CatagoryUpdate = ({
    catagoryId,
    catagoryName,
    updateBarfunc,
    updatestatus,
}: props) => {
    let [value, setvalue] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<InputCatagory>();
    if (value == "" && catagoryName) {
        setvalue(catagoryName);
    }
    let updatecatagory: SubmitHandler<InputCatagory> = async (data) => {
        let result = await catagoryUpdateService(
            `${catagoryUpdate}`,
            catagoryId,
            data?.catagory
        );
        if (result.message == "OK") {
            toast.success("Successfully Updated");
            updateBarfunc(true);
            updatestatus(true);
        } else {
            toast.warn("Catagory Already Exist");
        }
    };
    return (
        <div>
            <div className="w-screen h-screen  flex justify-center items-center bg-black bg-opacity-50 fixed z-20 top-0 left-0">
                <form
                    onSubmit={handleSubmit(updatecatagory)}
                    className=" bg-gray-200 shadow-md w-[400px] h-auto p-20 rounded-md flex justify-center items-center gap-y-4 flex-col"
                >
                    <input
                        className="w-full h-[40px] rounded-md text-center border-2"
                        type="text"
                        {...register("catagory", {
                            required: true,
                            minLength: 3,
                        })}
                        defaultValue={catagoryName ? catagoryName : ""}
                    />
                    <button
                        type="submit"
                        className="w-full h-[40px] rounded-md bg-blue-600 text-white flex justify-center items-center"
                    >
                        Update
                    </button>
                    <div
                        onClick={() => {
                            updateBarfunc(true);
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
