import {Data} from "@/pages/api/records";
import {hookstate, useHookstate} from "@hookstate/core";
import {fetcher} from "@/pages/react";
import {useEffect} from "react";


const recordsState = hookstate<Data[]>([]);

export const updateRecords = (newRecords: Data[]) => {
    recordsState.set(newRecords);
};


const Records = ({records}: any) => {
    const state: any = useHookstate(records);

    return <>
        {state.map((record: any, key: number) => {
            return <Record key={key} record={record}/>
        })}
    </>
}

const Record = ({record}: any) => {

    return <p>{record.name.get()} was updated at {record.updatedAt.get()} </p>
}


const HookState = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            fetcher("/api/records").then((records) => {
                updateRecords(records)
            })
        }, 1000);

        return () => clearInterval(interval)

    }, [])

    return (
        <>
            <h3>Render names using react hooks</h3>
            <Records records={recordsState}/>
        </>
    );
}

export default HookState