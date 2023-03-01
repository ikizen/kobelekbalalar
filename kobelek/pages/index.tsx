import Head from "next/head";
import Header from "../components/Header";
import HeaderIcons from "@/components/HeaderIcons";
import AboutFund from "@/components/AboutFund";
import HelpButton from "@/components/HelpButton";
import Children from "@/components/Children";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import HeaderCard from "../components/HeaderCard";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen px-[300px]">
                <header>
                    <Header />
                    <HeaderCard />
                    <HeaderIcons />
                </header>
                <AboutFund />
                <Statistics />
                <HelpButton />
                <Children />
            </div>
            <Footer />
        </>
    );
}