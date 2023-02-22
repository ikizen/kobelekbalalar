import Image from "next/image";
import Link from "next/link";

const enum Tel {
    Phone = "+77026351323",
    Whatsapp = `https://wa.me/${Phone}`,
}

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
            <div className="flex flex-row min-w-full justify-between pt-4">
                <Image src="/logo.png" alt="logo" height={62} width={164} />
                <div className="flex flex-row text-black">
                    {navbars.map((nav) => (
                        <button className="btn-nav" key={nav.name}>
                            <Link href={nav.link}>{nav.name}</Link>
                        </button>
                    ))}
                </div>
                {/* <button className="px-4 py-2 bg-[#F6A21E]">
                    <Link href={Tel.Whatsapp}>Помочь</Link>
                </button> */}
            </div>
        </>
    );
}
export default Header;
