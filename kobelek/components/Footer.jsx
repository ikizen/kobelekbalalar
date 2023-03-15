import Image from "next/image";
import instagram from "../public/instagram.svg";
import Link from "next/link";

function Footer() {
    const socialIcons = [
        { name: "./youtube.svg", link: "" },
        {
            name: "./instagram.svg",
            link: "https://www.instagram.com/kobelekbalalar/",
        },
        {
            name: "./facebook.svg",
            link: "https://www.facebook.com/kobelekbalalar",
        },
    ];
    return (
        <>
            <div className="flex flex-col md:gap-6 lg:gap-10 xl:gap-10 md:flex-row justify-center pt-10 pb-40 text-white px-[15px] md:px-[30px] lg:px-[100px] xl:px-[300px] lg:h-[600px] bg-[length:1560px_300px] md:bg-auto bg-no-repeat bg-left-bottom bg-[#395466] bg-[url('/footer.svg')]">
                <div>
                    <div className="text-center md:text-start text-[32px]">
                        Дети бабочки
                    </div>
                    <div className=" first-letter:pt-4 text-[20px] md:text-[22px]">
                        Первый в Казахстане Фонд помощи детям с редким
                        генетическим заболеванием Буллёзный Эпидермолиз.
                    </div>
                    <div className="flex flex-row pt-4 justify-around md:justify-start">
                        {socialIcons.map((icon) => (
                            <div
                                key={icon.name}
                                className="flex items-center pr-2"
                            >
                                <Link href={icon.link}>
                                    <Image
                                        src={icon.name}
                                        alt="instagram"
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-6 md:pt-0">
                    <div className="text-center md:text-start text-[32px]">
                        Наши реквизиты
                    </div>
                    <div className="pt-4 text-[20px] md:text-[22px]">
                        БИН: 170840001911 <br /> ИИК: KZ3396503F0008876643{" "}
                        <br /> в Филиале АО «Forte Bank». г.Нур-Султан <br />{" "}
                        БИК: IRTYKZKA <br /> БИН: 990740000684
                    </div>
                    <div className="pt-4 text-[20px] md:text-[22px]">
                        Юридический адрес: РК, г. Нур-Султан, р-н Сарыарка,
                        пр.Абая 18, 309 каб. Аллабергенов Султан Муратович +7
                        701 55 88 934
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
