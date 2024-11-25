"use client";
import React, { useState } from "react";
import CatagoryCard from "../Components/catagoryCard";
import Searchbar from "../Components/searchbar/Searchbar";
interface types {
    id: string;
    catagory: string;
}
export default function Page() {
    let [barStatus, setbarStatus] = useState<string>("ADD");

    let allData = [
        { id: "232wde", catagory: "Food" },
        { id: "d7dshs", catagory: "Cloths" },
    ];
    return (
        <div className="mx-10">
            <div className="w-full min-w-[800px] overflow-x-scroll h-auto">
                <Searchbar baroption={barStatus} />
                <div className="h-[50px] grid grid-cols-4 border-2">
                    <div className="col-span-1 text-center flex justify-center items-center">
                        Id
                    </div>
                    <div className="col-span-1 text-center flex justify-center items-center">
                        catagory
                    </div>
                    <div className="col-span-2 text-center flex justify-center items-center">
                        Action
                    </div>
                </div>

                {allData &&
                    allData.map((item: types, index: number) => {
                        return (
                            <div key={index}>
                                <CatagoryCard
                                    id={item.id}
                                    catagory={item.catagory}
                                    barstatus={barStatus}
                                    setbarstatus={setbarStatus}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
