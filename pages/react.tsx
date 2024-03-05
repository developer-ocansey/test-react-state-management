import {Inter} from "next/font/google";
import useSWR from "swr";
import {Data} from "@/pages/api/records";

const inter = Inter({subsets: ["latin"]});

export const fetcher = (url: string) => fetch(url).then(r => r.json())

const Records = ({records}: any) => {
    return <>
        {records.map((record: Data, key: number) => {
            return <p key={key}>{record.name} was updated at {record.updatedAt} </p>
        })}
    </>
}

const React = () => {
    const {data = []} = useSWR("/api/records", fetcher, {refreshInterval: 1000})

    return (
        <>
            <h3>Render names using react hooks</h3>
            <Records records={data}/>
        </>
    );
}

export default React