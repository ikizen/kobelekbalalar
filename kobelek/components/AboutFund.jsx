import Image from "next/image";

const goals = [
    {
        title: "Наша миссия",
        text: "Оказать всестороннюю поддержку пациентам с Буллёзным Эпидермолизом для облегчения страданий и улучшения качества жизни.",
        link: "./mission.svg",
    },
    {
        title: "Наша цель",
        text: "Осуществление благотворительной и социальной деятельности направленной на улучшение морально-психологического состояния граждан, а также обеспечение медицинской, материальной, информационной, психологической и любой другой помощью и содействием больных с Буллёзным Эпидермолизом.",
        link: "./goal.svg",
    },
];
function AboutFund() {
    return (
        <>
            <div className="md:py-[50px]">
                <div className="text-[32px] lg:text-[64px] font-bold pb-2">
                    О фонде Kóbelek balalar
                </div>
                <div className="lg:text-[36px] font-normal lg:pr-[280px]">
                    Помощь детям с редким генетическим заболеванием мы начали 3
                    августа 2017 года при поддержке «Казахстанской Ассоциации
                    дерматовенерологов, дерматокосметологов».
                </div>
                <div className="flex flex-col md:flex-row pt-14 gap-[100px]">
                    {goals.map((goal) => (
                        <div key={goal.title} className="md:w-1/2">
                            <Image
                                src={goal.link}
                                alt="icon"
                                height={38}
                                width={38}
                            />
                            <div className="pt-4">
                                <div className="md:text-[36px] font-normal leading-normal">
                                    {goal.title}
                                </div>
                                <div className="md:text-[24px] font-normal leading-normal text-justify py-2">
                                    {goal.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AboutFund;
