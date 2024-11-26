"use client";
import { catagoryUpdate } from "@/app/utils/catagoryUpdateUrl";
import { rootUrl } from "@/app/utils/endPoint";
import React, { useState } from "react";
interface props {
    baroption: string;
    actionstate: {
        id: string;
        catagory: string;
    };
    updatestatus: Function;
}
export default function searchBar({
    baroption,
    actionstate,
    updatestatus,
}: props) {
    let [inputValue, setinputValue] = useState<string>("");
    let setvalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputValue(e.target.value);
    };
    let dataUpdate = async () => {
        if (baroption === "UPDATE" && actionstate) {
            let response: any = await fetch(`${rootUrl}${catagoryUpdate}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: actionstate.id,
                    catagory: inputValue,
                }),
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                updatestatus(true);
            }
        }
    };
    return (
        <div>
            <div className="min-w-[800px] h-[50px] grid grid-cols-6 mt-5 border-2">
                <div className="h-full w-full col-span-4 flex justify-start items-center ">
                    <input
                        className=" w-full h-full border-2 pl-3"
                        placeholder="Add items"
                        type="text"
                        onChange={setvalue}
                        value={inputValue}
                    />
                </div>
                <div className="col-span-2 h-full w-full flex justify-center items-center ">
                    <button
                        onClick={dataUpdate}
                        className="px-3 w-1/2 h-full py-2 gap-x-2 border-1 bg-blue-600 text-white flex justify-around items-center"
                    >
                        {baroption}
                    </button>
                </div>
            </div>
        </div>
    );
}
