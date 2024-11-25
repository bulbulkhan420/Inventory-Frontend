import React from "react";
interface props {
    baroption: string;
}
export default function Searchbar({ baroption }: props) {
    return (
        <div>
            <div className="min-w-[800px] h-[50px] grid grid-cols-6 mt-5 border-2">
                <div className="h-full w-full col-span-4 flex justify-start items-center ">
                    <input
                        className=" w-full h-full border-2 pl-3"
                        placeholder="Add items"
                        type="text"
                    />
                </div>
                <div className="col-span-2 h-full w-full flex justify-center items-center ">
                    <button className="px-3 w-1/2 h-full py-2 gap-x-2 border-1 bg-blue-600 text-white flex justify-around items-center">
                        {baroption}
                    </button>
                </div>
            </div>
        </div>
    );
}
