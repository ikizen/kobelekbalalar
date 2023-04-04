import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import kaspi from "/public/kaspi.png";
import Image from "next/image";
import Link from "next/link";
import qr from "/public/qr-logo.svg";

function Help() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <br />
                <div className="bg-[#46bd85] rounded-[30px] py-[80px] px-[40px] lg:p-[80px] text-white flex flex-col justify-center items-center">
                    <div className="h1 text-white">
                        Вы можете оплатить через каспи
                    </div>
                    <br />
                    <div className="hidden md:flex flex-col items-center">
                        <div className="text-[30px] ">Сканируйте и платите</div>
                        <Image
                            src={kaspi}
                            alt="kaspi"
                            width={300}
                            height={300}
                        />
                        <div className="text-[30px] ">
                            Благотворительный Фонд «Kobelek balalar»
                        </div>
                    </div>
                    <Image
                        src={qr}
                        alt="qr"
                        height={150}
                        width={150}
                        className="py-8 md:hidden"
                    />
                    <button className="w-[260px] md:hidden text-sm text-black bg-white gap-4 rounded-full p-4 hover:text-white hover:bg-[#e89761] ">
                        <Link href="https://kaspi.kz/pay/kobelekbalalar?started_from=QR">
                            Оплатить
                        </Link>
                    </button>
                </div>
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
