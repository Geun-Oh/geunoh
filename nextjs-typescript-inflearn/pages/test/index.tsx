import axios, { AxiosPromise } from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { InAuthUser } from "../../models/in_auth_user";

interface Props {
    data: InAuthUser | null;
}

const Page: NextPage<Props> = ({ data }) => {
    // useEffect(() => {
    //     async function getRes() {
    //         try {
    //             const d: AxiosPromise<any> = await axios(`https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/a01091634257`).then(res => res.data)
    //             console.log(d);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getRes();
    // }, [])
    return <div>{data?.displayName}</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    try {
        const resData: InAuthUser | null = await fetch('https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/a01091634257').then(res => console.info(res));
        return {
            props: {
                data: resData,
            }
        }
    } catch (err) {
        console.error(err);
        return {
            props: {
                data: null,
            }
        }
    }
}

export default Page;