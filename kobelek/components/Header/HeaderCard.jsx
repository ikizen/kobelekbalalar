function HeaderCard() {
    return (
        <>
            <div className="flex flex-col justify-center h-auto xl:h-[472px] md:bg-[url('/img/background.png')] bg-[url('/img/background-phone.png')] bg-cover bg-left-bottom rounded-[30px] md:my-4 px-[25px] py-[40px] gap-4 md:p-[80px] text-white">
                <div className="self-center text-[20px] md:text-[25px] lg:px-[150px] py-[20px] sm:py-[40px] md:py-0 lg:pb-[40px] text-center">
                    Первый в Казахстане Фонд помощи детям с редким генетическим
                    заболеванием Буллёзный Эпидермолиз.
                </div>
                <div className="text-[60px] md:text-[80px] text-center font-bold leading-none">
                    Kobelek Balalar
                </div>
                <div className="text-center text-[25px] md:text-[50px] font-light md:leading-[62px] ">
                    Благотворительный фонд
                </div>
            </div>
        </>
    );
}

export default HeaderCard;
