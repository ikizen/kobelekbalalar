import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import Kaspi from "/components/Kaspi.jsx";
import Image from "next/image";
import Link from "next/link";

function Help() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <br />
                <Kaspi />
                <br />
                <br />
                <h1 className="h1">Договор на юридический счет</h1>
                <br />
                <div>
                    Вы можете оплатить конкретную медицинскую услугу, подписав
                    договор и переведя необходимую сумму на счет медицинского
                    учреждения.
                </div>
                <div>Наши дети будут рады любой помощи! Спасибо!</div>
                <br />
                <br />
                <h1 className="h1">Адресная помощь</h1>
                <br />
                <div>
                    При желании помочь какому-либо конкретному ребенку или
                    определенным детям, Вы можете запросить адрес семьи. После
                    чего привезти им все необходимое, лично пообщаться с
                    ребенком и т.д.
                </div>
                <br />
                <div>
                    Чтобы отправить запрос необходимо оставить заявку на сайте
                    или связаться с нами по контактному телефону:
                </div>
                <button className="w-[260px] md:hidden text-sm text-black bg-white gap-4 rounded-full p-4 hover:text-white hover:bg-[#e89761] ">
                    <Link href="tel:+77475852514">Позвонить</Link>
                </button>
                <br />
                <br />
            </div>
            <Footer />
        </>
    );
}
export default Help;
