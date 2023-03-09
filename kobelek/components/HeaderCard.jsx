function HeaderCard() {
    return (
        <>
            <div className="md:h-[472px] md:bg-[url('/img/background.png')] bg-[url('/img/background-phone.png')] bg-cover bg-left-bottom rounded-[30px] md:my-4 md:p-[80px] text-white">
                <div className="self-center md:text-[25px] md:px-[150px] md:pb-[80px] text-center">
                    Первый в Казахстане Фонд помощи детям с редким генетическим
                    заболеванием Буллёзный Эпидермолиз.
                </div>
                <div className="md:text-[80px] text-center font-bold leading-none">
                    Дети бабочки
                </div>
                <div className="text-center md:text-[50px] font-light leading-[62px] ">
                    Благотворительный фонд
                </div>
            </div>
        </>
    );
}

export default HeaderCard;
