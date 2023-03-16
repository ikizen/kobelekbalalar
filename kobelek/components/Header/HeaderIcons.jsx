import Image from "next/image";
const icons = [
    {
        name: "Тесное сотрудничество с мед. учреждениями",
        link: "/img/1.png",
    },
    {
        name: "Поддержка предпринимателей Казахстана",
        link: "/img/3.png",
    },
    {
        name: "Семинары и обучение врачей",
        link: "/img/2.png",
    },
    {
        name: "Моральная и психологическая поддержка",
        link: "/img/4.png",
    },
];
function HeaderIcons() {
    return (
        <>
            <div className="py-8">
                <div className="flex flex-col items-center sm:justify-between sm:gap-4 sm:flex-row sm:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between">
                    {icons.map((icon) => (
                        <div
                            className="flex flex-row items-center lg:justify-around pb-8 lg:pb-0"
                            key={icon.name}
                        >
                            <Image
                                src={icon.link}
                                alt="icon"
                                height={75}
                                width={94}
                            />
                            <div className="w-[190px] text-[16px] leading-normal pb-1 pl-1">
                                {icon.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HeaderIcons;
