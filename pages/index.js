import Head from "next/head";
import Layout from "@components/Layout";

export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Next.js Toolbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout />
        </div>
    );
}
