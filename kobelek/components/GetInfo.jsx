import Link from "next/link";
const info = [
    {
        title: "Хотите больше узнать что такое Буллезный Эпидермолиз?",
        button: "Узнать больше",
        text: "Синдром «бабочки» — красивое название одного из тяжелых наследственных заболеваний. Узнайте подробнее нажав на кнопку.",
        link: "/disease",
    },
    {
        title: "Обучение врачей по детям бабочкам",
        button: "Подробнее",
        text: "Несмотря на то что болезнь не излечима, своевременное медицинское вмешательство, позволяет уменьшить степень их тяжести. Узнайте об этом подробнее.",
        link: "/doctor",
    },
    {
        title: "Наши отчеты",
        button: "Подробнее",
        text: "Для полной прозрачной деятельности нашего фонда, мы выкладываем наши отчеты на сайте. Вы можете ознакомиться нажав на кнопку.",
        link: "/report",
    },
];
function GetInfo() {
    return (
        <>
            <div className="flex flex-col items-center px-2 my-8 md:px-[140px] lg:my-[60px] py-[60px] lg:p-[80px] bg-[#46bd85] rounded-[30px] text-white">
                <h1 className="pb-4 lg:pb-0 text-[28px] font-bold lg:font-normal lg:text-[50px] ">
                    Подробная информация
                </h1>
                <div className="flex flex-col md:gap-4 lg:gap-4 lg:flex-row xl:gap-8">
                    {info.map((info) => (
                        <div
                            key={info.title}
                            className="flex flex-col justify-between "
                        >
                            <h1 className="flex content-start pb-4 pt-4 text-[24px] text-center lg:text-center ">
                                {info.title}
                            </h1>
                            <div className="pb-4 text-[16px] ">{info.text}</div>
                            <button className="p-4 lg:w-[250px] bg-white rounded-full text-black hover:bg-[#e89761] hover:text-white ">
                                <Link href={info.link}>{info.button}</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GetInfo;
