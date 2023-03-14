import { IconButton, Flex } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
    const [showMe, setShowMe] = useState(false);
    const logo = "/logo3.png";

    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <>
            <div className="hidden lg:flex flex-row min-w-full justify-between py-4">
                <Image src={logo} alt="logo" height={62} width={100} />
                <div className="flex flex-row text-black">
                    {navbars.map((nav) => (
                        <button className="btn-nav" key={nav.name}>
                            <Link href={nav.link}>{nav.name}</Link>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-row pt-4 pb-6 justify-between lg:hidden">
                <Image src={logo} alt="logo" height={32} width={50} />
                <IconButton
                    aria-label="Open Menu"
                    size="lg"
                    mr={2}
                    icon={<HamburgerIcon />}
                    onClick={toggle}
                />
            </div>
            <div
                className="fixed top-0 left-0 z-30 h-full w-full bg-white"
                style={{ display: showMe ? "flex" : "none" }}
            >
                <div className="flex flex-col w-full">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={<CloseIcon />}
                        className="self-end"
                        onClick={toggle}
                    />
                    <div className="flex flex-col text-black">
                        {navbars.map((nav) => (
                            <button className="btn-nav" key={nav.name}>
                                <Link href={nav.link}>{nav.name}</Link>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;
