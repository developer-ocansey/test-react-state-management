import {atom, useAtom, useAtomValue} from "jotai"
import {fetcher} from "@/pages/react";
import {Data} from "@/pages/api/records";
import {atomEffect} from "jotai-effect";
import {selectAtom, splitAtom} from "jotai/utils";
import {DevTools} from "jotai-devtools";

const initialRecords: Data[] = []
const recordsAtom = atom(initialRecords)

// Place selectors outside component to prevent infinite re-renders : https://jotai.org/docs/utilities/select#hold-stable-references
const nameSelector = (record: any) => record.name
const updatedAtSelector = (record: any) => record.updatedAt

const recordsEffectAtom = atomEffect((_, set) => {
    const handler = setInterval(() => {
        fetcher("/api/records").then((data) => {
            set(recordsAtom, [...data])
        })
    }, 1000)

    return () => {
        clearInterval(handler)
    }
})

const AtomRecord = ({recordAtom}: any) => {
    const nameAtom = selectAtom(recordAtom, nameSelector)
    const updatedAtAtom = selectAtom(recordAtom, updatedAtSelector)

    return <p><AtomName nameAtom={nameAtom}/> was updated at <AtomUpdatedAt updatedAtAtom={updatedAtAtom}/></p>
}

const AtomName = ({nameAtom}: any) => {
    const name: any = useAtomValue(nameAtom);

    return <span>{name}</span>
}

const AtomUpdatedAt = ({updatedAtAtom}: any) => {
    const updatedAt: any = useAtomValue(updatedAtAtom);

    return <span>{updatedAt}</span>
}

const AtomRecords = () => {
    const recordsAtomsAtom = splitAtom(recordsAtom)
    const records = useAtomValue(recordsAtomsAtom);

    return <>
        {records.map((recordAtom) => {
            return <AtomRecord key={recordAtom.toString()} recordAtom={recordAtom}/>
        })}
    </>
}

const Jotai = () => {
    useAtom(recordsEffectAtom);

    return (
        <>
            <DevTools isInitialOpen/>
            <h3>Render names using jotai</h3>
            <AtomRecords/>
        </>
    );
}
export default Jotai