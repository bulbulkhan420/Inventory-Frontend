let checkApi = async (api: string): Promise<any> => {
    console.log(api);
    let data: any = await fetch(api);
    let bigdata: any = await data.json();

    return bigdata;
};
export { checkApi };
