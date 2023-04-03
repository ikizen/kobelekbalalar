import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import kaspi from "/public/kaspi.png";
import Image from "next/image";
import Link from "next/link";

function Help() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <br />
                <div className="h1">Вы можете оплатить через каспи</div>
                <br />
                <div className="hidden md:flex flex-col items-center">
                    <div>Сканируйте и платите</div>
                    <Image src={kaspi} alt="kaspi" width={300} height={300} />
                    <div>Благотворительный Фонд «Kobelek balalar»</div>
                </div>
                <button className="text-sm text-black bg-white gap-4 rounded-full p-4 hover:text-white hover:bg-[#e89761] ">
                    <Link href="https://kaspi.kz/pay/kobelekbalalar?started_from=QR">
                        Оплатить
                    </Link>
                </button>
            </div>
            <Footer />
        </>
    );
}
export default Help;
