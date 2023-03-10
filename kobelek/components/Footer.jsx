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
            <div className="flex flex-col md:flex-row justify-center pt-8 text-white md:px-[300px] h-[600px] bg-no-repeat bg-bottom bg-[#395466] bg-[url('/footer.svg')]">
                <div>
                    <div className="text-[32px]">Дети бабочки</div>
                    <div className="pt-4 text-[22px]">
                        Первый в Казахстане Фонд помощи детям с редким
                        генетическим заболеванием Буллёзный Эпидермолиз.
                    </div>
                    <div className="flex flex-row pt-4">
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
                <div>
                    <div className="text-[32px]">Наши реквизиты</div>
                    <div className="pt-4 text-[22px]">
                        БИН: 170840001911 <br /> ИИК: KZ3396503F0008876643{" "}
                        <br /> в Филиале АО «Forte Bank». г.Нур-Султан <br />{" "}
                        БИК: IRTYKZKA <br /> БИН: 990740000684
                    </div>
                    <div className="pt-4 text-[22px]">
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
