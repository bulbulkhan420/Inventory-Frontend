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
export {
    catagoryUpdateService,
    catagoryAddService,
    catagoryDeleteService,
    getAllCatagoryListService,
};
