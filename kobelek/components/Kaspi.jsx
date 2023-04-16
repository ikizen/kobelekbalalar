import Image from "next/image";
import Link from "next/link";
import qr from "/public/qr-logo.svg";
import kaspi from "/public/kaspi.png";

function Kaspi() {
    return (
        <>
            <br />
            <div className="bg-[#46bd85] rounded-[30px] py-[80px] px-[40px] lg:p-[80px] text-white flex flex-col justify-center items-center">
                <div className="h1 text-white text-center">
                    Помочь через приложение Kaspi
                </div>
                <br />
                <div className="hidden md:flex flex-col items-center">
                    <div className="text-[30px] ">Сканируйте и платите</div>
                    <Image src={kaspi} alt="kaspi" width={300} height={300} />
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
                <button className="w-[260px] md:hidden text-md font-bold text-black bg-white gap-4 rounded-full p-4 hover:text-white hover:bg-[#e89761] ">
                    <Link href="https://kaspi.kz/pay/kobelekbalalar?started_from=QR">
                        Хочу помочь
                    </Link>
                </button>
            </div>
            <br />
        </>
    );
}

export default Kaspi;
