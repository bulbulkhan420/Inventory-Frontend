import React, { useState } from "react";
type props = {
    catagoryId: string;
    catagoryName: string;
    updateBarfunc: Function;
};
export const CatagoryUpdate = ({
    catagoryId,
    catagoryName,
    updateBarfunc,
}: props) => {
    let [value, setvalue] = useState("");
    if (value == "" && catagoryName) {
        setvalue(catagoryName);
    }
    return (
        <div>
            <div className="w-screen h-screen  flex justify-center items-center bg-gray-50 bg-opacity-10 fixed z-20 top-0 left-0">
                <form className=" bg-slate-500 w-[400px] h-auto p-20 rounded-md flex justify-center items-center gap-y-4 flex-col">
                    <input
                        className="w-full h-[40px] rounded-md text-center"
                        type="text"
                        value={catagoryName ? catagoryName : ""}
                        onChange={(e) => {
                            setvalue(e.target.value);
                        }}
                    />
                    <div className="w-full h-[40px] rounded-md bg-blue-600 text-white flex justify-center items-center">
                        Update
                    </div>
                    <div
                        onClick={() => {
                            updateBarfunc(true);
                        }}
                        className="w-full h-[40px] rounded-md bg-blue-600 text-white flex justify-center items-center"
                    >
                        Cancel
                    </div>
                </form>
            </div>
        </div>
    );
};
