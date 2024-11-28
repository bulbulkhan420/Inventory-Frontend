// Catagory
let catagoryUpdateService = async (
    api: string,
    id: string,
    catagory: string
) => {
    try {
        let response: any = await fetch(api, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                catagory,
            }),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
};

let catagoryAddService = async (api: string, catagory: string) => {
    try {
        let response: any = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                catagory,
            }),
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        return error;
    }
};

let catagoryDeleteService = async (api: string) => {
    try {
        let response: any = await fetch(api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        return error;
    }
};

let getAllCatagoryListService = async (api: string): Promise<any> => {
    console.log(api);
    let data: any = await fetch(api);
    let bigdata: any = await data.json();

    return bigdata;
};

// Company
type Companylist = {
    name: string;
    phone: number;
    email: string;
    typeOfCompany: string;
};
let addCompanyListService = async (api: string, putData: any): Promise<any> => {
    try {
        console.log(putData);
        let data: any = await fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: putData.name,
                phone: putData.phone,
                email: putData.email,
                typeOfCompany: putData.typeOfCompany,
            }),
        });
        let Companylist: any = await data.json();
        return Companylist;
    } catch (error) {
        return error;
    }
};

let getAllCompanyListService = async (api: string): Promise<any> => {
    try {
        let data: any = await fetch(api);
        let companylist: any = await data.json();
        return companylist;
    } catch (error) {
        return error;
    }
};

let updateCompanyService = async (
    api: string,
    data: Companylist
): Promise<any> => {
    try {
        try {
            let response: any = await fetch(api, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    typeOfCompany: data.typeOfCompany,
                }),
            });

            const result = await response.json();
            return result;
        } catch (error) {
            return error;
        }
    } catch (error) {}
};
let deleteCompanyService = async (api: string) => {
    try {
        let response: any = await fetch(api, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        return error;
    }
};
export {
    catagoryUpdateService,
    catagoryAddService,
    catagoryDeleteService,
    getAllCatagoryListService,
    addCompanyListService,
    getAllCompanyListService,
    updateCompanyService,
    deleteCompanyService,
};
