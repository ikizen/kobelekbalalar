import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import Image from "next/image";

const reports = [
    { key: "report1", link: "/reports/report1.png" },
    {
        key: "report2",
        link: "/reports/report2.png",
    },
    {
        key: "report3",
        link: "/reports/report3.png",
    },
];
function Report() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <div className="flex flex-col gap-8 md:flex-row md:gap-4 my-8">
                    {reports.map((report) => (
                        <div key={report.key} className="justify-center flex">
                            <Image
                                src={report.link}
                                alt={report.link}
                                width={150}
                                height={50}
                                className="w-auto "
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Report;
