import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>State</title>
            <meta name="description" content="Test state management"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
            <Component {...pageProps} />
        </main>
    </>;
}
