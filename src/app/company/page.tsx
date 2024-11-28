"use client";
import React, { useEffect, useState } from "react";
import SearchBarCompany from "../Components/searchbar/searchBarCompany";
import CompanyCard from "../Components/companyComponents/companyCard";
import { getAllCompanyListService } from "../services/http-services";
import { getAllCompanyListUrl } from "../services/endpoints";
type ICompany = {
    name: string;
    phone: number;
    email: string;
    typeOfCompany: string;
};
export default function page() {
    let [allData, setallData] = useState<any>();
    let [refress, setrefress] = useState<boolean>(false);
    let pagerefress = (data: boolean) => {
        if (data) {
            setrefress(!refress);
        }
    };
    useEffect(() => {
        let result: Promise<any> = getAllCompanyListService(
            `${getAllCompanyListUrl}`
        );
        result.then((data) => {
            setallData(data.data);
            if (allData) {
                console.log(allData);
            }
        });
    }, [refress]);
    return (
        <div className="lg:mx-10 border-2 min-w-[800px]">
            <div className="w-full min-w-[800px] overflow-x-scroll h-auto">
                <div className="w-full min-w-[800px] h-[80px] flex justify-center items-center">
                    <SearchBarCompany pagerefress={pagerefress} />
                </div>

                <div className="h-[50px] grid grid-cols-10 border-t-2 border-b-2">
                    <div className="col-span-2 font-bold text-center flex justify-center items-center">
                        Name
                    </div>
                    <div className="col-span-2 text-center font-bold flex justify-center items-center">
                        Phone
                    </div>
                    <div className="col-span-2 text-center font-bold flex justify-center items-center">
                        Email
                    </div>
                    <div className="col-span-2 text-center font-bold flex justify-center items-center">
                        Type
                    </div>
                    <div className="col-span-2 text-center font-bold flex justify-center items-center">
                        Action
                    </div>
                </div>
                {allData &&
                    allData?.map((comapny: any, index: number) => {
                        return (
                            <div key={index}>
                                <CompanyCard
                                    company={comapny}
                                    pagerefress={pagerefress}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
