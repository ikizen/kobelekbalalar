import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import Link from "next/link";

function Contacts() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <h1 className="h1">Контакты</h1>
                <br />
                <div>
                    Вы можете найти нас по адресу: г. Астана, район Сарыарка, Ул
                    Богенбай батыра 3\3, КВ ОФИС КАБ. 38
                </div>
                <br />
                <button className="p-4 w-[260px] rounded-full bg-[#e89761] text-white ">
                    <Link href="https://go.2gis.com/t1mm4e">Открыть карту</Link>
                </button>
                <br />
                <br />
                <div>
                    Так же вы можете связаться с нашим менеджером по телефону:
                </div>
                <br />
                <button className="w-[260px] text-sm text-white gap-4 rounded-full p-4 bg-[#e89761] ">
                    <Link href="tel:+77475852514">Позвонить</Link>
                </button>
            </div>
            <Footer />
        </>
    );
}
export default Contacts;
