"use client";
import React, { useEffect, useState } from "react";
import CatagoryCard from "../Components/catagoryCard";
import Searchbar from "../Components/searchbar/searchBar";
import { rootUrl } from "../utils/endPoint";
import { catagoryGet } from "../utils/catagoryGet";

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
    let checkApi = async (api: string): Promise<any> => {
        console.log(api);
        let data: any = await fetch(api);
        let bigdata: any = await data.json();

        return bigdata;
    };
    useEffect(() => {
        let info: Promise<any> = checkApi(`${rootUrl}${catagoryGet}`);
        info.then((data) => {
            setallData(data);
        });
    }, [refress]);
    return (
        <div className="lg:mx-10 border-2">
            <div className="w-full min-w-[800px] overflow-x-scroll h-auto">
                <Searchbar
                    baroption={barStatus}
                    actionstate={datastate}
                    updatestatus={updatestatus}
                />
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
                    allData?.data?.map((item: IData, index: number) => {
                        return (
                            <div key={index}>
                                <CatagoryCard
                                    id={item?.id}
                                    catagory={item?.catagory}
                                    barstatus={barStatus}
                                    setbarstatus={setbarStatus}
                                    passingToNavbar={passingToNavbar}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
