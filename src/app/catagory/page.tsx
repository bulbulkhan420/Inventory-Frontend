"use client";
import React, { useEffect, useState } from "react";
import CatagoryCard from "../Components/catagoryComponent/catagoryCard";
import Searchbar from "../Components/searchbar/searchBar";
import { getAllCatagoriesUrl } from "../services/endpoints";
import { getAllCatagoryListService } from "../services/http-services";

interface IData {
    id: string;
    catagory: string;
}
interface ICatagory {
    message: string;
    data: IData[];
}
interface ICt {
    id: string;
    catagory: String;
}
export default function Page() {
    let [barStatus, setbarStatus] = useState<string>("ADD");
    let [allData, setallData] = useState<ICatagory>();
    let [datastate, setdatastate] = useState<any>();
    let [refress, setrefress] = useState(false);
    let passingToNavbar = (data: { id: string; catagory: string }): void => {
        setdatastate(data);
    };
    let updatestatus = (check: boolean): void => {
        if (check) {
            setrefress(!refress);
        }
    };

    useEffect(() => {
        let info: Promise<any> = getAllCatagoryListService(
            `${getAllCatagoriesUrl}`
        );
        info.then((data) => {
            setallData(data);
        });
        setbarStatus("ADD");
    }, [refress]);
    return (
        <div className="lg:mx-10 border-2 min-w-[800px]">
            <div className="w-full min-w-[800px] overflow-x-scroll h-auto">
                <div className="w-full min-w-[800px] h-[80px] flex justify-center items-center">
                    <Searchbar
                        baroption={barStatus}
                        actionstate={datastate}
                        updatestatus={updatestatus}
                    />
                </div>

                <div className="h-[50px] grid grid-cols-4 border-t-2 border-b-2">
                    <div className="col-span-1 font-bold text-center flex justify-center items-center">
                        Id
                    </div>
                    <div className="col-span-1 text-center font-bold flex justify-center items-center">
                        Catagory
                    </div>
                    <div className="col-span-2 text-center font-bold flex justify-center items-center">
                        Action
                    </div>
                </div>

                {allData &&
                    allData?.data?.map((item: IData, index: number) => {
                        return (
                            <div key={index}>
                                <CatagoryCard
                                    id={item?.id}
                                    catagory={item?.catagory}
                                    barstatus={barStatus}
                                    setbarstatus={setbarStatus}
                                    passingToNavbar={passingToNavbar}
                                    updatestatus={updatestatus}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
