import styles from "@/styles/Home.module.css";
import Link from "next/link";


const Index = () => {
    return (
        <>
            <h3>Try multiple state management</h3>
            <div>
                <div className={`${styles.card}`}>
                    <Link href={"/react"}>React</Link>
                </div>
                <div className={`${styles.card}`}>
                    <Link href={"/jotai"}>Jotai</Link>
                </div>
                <div className={`${styles.card}`}>
                    <Link href={"/hookstate"}>Hook state</Link>
                </div>
            </div>
        </>
    );
}

export default Index
