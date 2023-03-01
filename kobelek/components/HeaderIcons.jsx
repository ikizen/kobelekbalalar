import Image from "next/image";
const icons = [
    {
        name: "Тесное сотрудничество с мед. учреждениями",
        link: "./img/1.svg",
    },
    {
        name: "Поддержка предпринимателей Казахстана",
        link: "./img/3.svg",
    },
    {
        name: "Семинары и обучение врачей",
        link: "./img/2.svg",
    },
    {
        name: "Моральная и психологическая поддержка",
        link: "./img/4.svg",
    },
];
function HeaderIcons() {
    return (
        <>
            <div className="py-8">
                <div className="flex flex-row justify-between">
                    {icons.map((icon) => (
                        <div
                            className="flex flex-row items-end"
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
