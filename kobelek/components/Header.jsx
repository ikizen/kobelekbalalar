import Image from "next/image";
import Link from "next/link";

const navbars = [
    { name: "Главная", link: "/" },
    { name: "О Фонде", link: "/fund" },
    { name: "Как Помочь детям", link: "/help" },
    { name: "Новости", link: "news" },
    { name: "Контакты", link: "/contacts" },
];
function Header() {
    return (
        <>
            <div className="flex flex-row min-w-full justify-between py-4">
                <Image src="/logo3.png" alt="logo" height={62} width={100} />
                <div className="flex flex-row text-black">
                    {navbars.map((nav) => (
                        <button className="btn-nav" key={nav.name}>
                            <Link href={nav.link}>{nav.name}</Link>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Header;
