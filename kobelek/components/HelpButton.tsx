import Link from "next/link";
function HelpButton() {
    const tel = "+77026351323";
    // const whatsappText = `https://wa.me/${tel}?text=`;
    // const text = "I'm%20interested%20in%20your%20car%20for%20sale";
    const helpInfo = [
        {
            title: "Оказать помощь детям бабочкам",
            text: `БИН: 170840001911
                        ИИК: KZ3396503F0008876643
                        в Филиале АО «Forte Bank». г.Нур-Султан
                        БИК: IRTYKZKA
                        БИН: 990740000684`,
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
            text: "Ищем добровольцев, которым небезразлично здоровье детей,готовых вместе с нами помочь им.",
            button: "Я волонтер",
            whatsapp: "Здравствуйте,%20я%20хочу%20стать%20вашим%20волонтером",
        },
    ];

    return (
        <>
            <div className="flex flex-row gap-10 justify-between bg-[#46bd85] rounded-[30px] my-[80px] p-[80px] text-white">
                {helpInfo.map((info) => (
                    <div
                        className="relative flex flex-col w-1/3"
                        key={info.title}
                    >
                        <div className="h-[100px] text-[30px] leading-none">
                            {info.title}
                        </div>
                        <div className="text-sm">{info.text}</div>
                        <div className="h-[100px]"></div>
                        <button className="absolute bottom-0 text-sm text-black bg-white gap-4 rounded-full p-4">
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
