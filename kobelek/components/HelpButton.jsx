import Link from "next/link";

function bin() {
    return (
        <>
            БИН: 170840001911$
            <br />
            ИИК: KZ3396503F0008876643 <br /> в Филиале АО «Forte Bank». г.
            Астана <br /> БИК: IRTYKZKA <br /> БИН: 990740000684
        </>
    );
}

function HelpButton() {
    const tel = "+77475852514";
    const helpInfo = [
        {
            title: "Оказать помощь детям бабочкам",
            text: bin(),
            button: "Связаться",
            whatsapp:
                "Здравствуйте,%20Я%20бы%20хотел%20помочь%20детям%20бабочкам🤗",
        },
        {
            title: "Нуждаюсь в помощи",
            text: "Если ваш ребенок болен БЭ, и вы решили прибегнуть к помощи нашего фонда, мы постараемся сделать все, что в наших силах.",
            button: "Связаться",
            whatsapp:
                "Здравствуйте,%20мне%20нужна%20ваша%20помощь🙏🏻!%20Мой%20ребенок%20болен%20буллёзным%20эпидермолизом",
        },
        {
            title: "Хочу стать волонтером",
            text: "Ищем добровольцев, которым небезразлично здоровье детей, готовых вместе с нами помочь им.",
            button: "Я волонтер",
            whatsapp: "Здравствуйте,%20я%20хочу%20стать%20вашим%20волонтером",
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between bg-[#46bd85] rounded-[30px] my-[80px] py-[80px] px-[40px] lg:p-[80px] text-white">
                {helpInfo.map((info) => (
                    <div
                        className="flex flex-col text-center justify-between md:w-[220px] lg:w-[240px]"
                        key={info.title}
                    >
                        {" "}
                        <div className="pb-6 md:pb-10">
                            <div className="h-[80px] md:h-[100px] text-[30px] md:text-[24px] lg:text-[30px] leading-none">
                                {info.title}
                            </div>
                            <div className="text-[20px] md:text-[16px] xl:text-[20px] text-justify">
                                {info.text}
                            </div>
                        </div>
                        <button className="text-sm gap-4 rounded-full p-4 text-black hover:text-white bg-white hover:bg-[#e89761] ">
                            <Link
                                href={`https://wa.me/${tel}?text=${info.whatsapp}`}
                            >
                                {info.button}
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HelpButton;
