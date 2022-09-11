import axios, { AxiosPromise } from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

const Page: NextPage = () => {
    useEffect(() => {
        async function getRes() {
            try {
                const d: AxiosPromise<any> = await axios(`https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/a01091634257`).then(res => res.data)
                console.log(d);
            } catch (err) {
                console.log(err);
            }
        }
        getRes();
    }, [])
    return <div>hello!</div>;
}

export default Page;