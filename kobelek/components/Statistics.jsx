function Statistics() {
    const statistics = [
        { number: 61, text: "Пациентов до 16 лет" },
        {
            number: 20,
            text: "Пациентов старше 16 лет",
        },
        {
            number: 2017,
            text: "Год основания",
        },
        {
            number: 8564,
            text: "Число пожертвований",
        },
    ];
    return (
        <>
            <div className="flex flex-col gap-10 md:gap-6 md:flex-row justify-between py-8 text-[#395466]">
                {statistics.map((stat) => (
                    <div
                        className="flex flex-col justify-center items-center"
                        key={stat.number}
                    >
                        <div className="text-[50px] font-bold">
                            {stat.number}
                        </div>
                        <div className="text-center lg:text-left text-[22px]">
                            {stat.text}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Statistics;
