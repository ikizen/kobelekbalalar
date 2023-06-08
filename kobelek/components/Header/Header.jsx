import { IconButton, Flex } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
// import { Bars3Icon } from '@heroicons/24/outline';
// import { Bars3Icon } from '@heroicons/react/24/outline';
// import { Bars3Icon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/20/solid';

<Bars3Icon className="h-6 w-6 text-gray-500" />;

const navbars = [
  { name: 'Главная', link: '/' },
  { name: 'О Фонде', link: '/fund' },
  { name: 'Как Помочь детям', link: '/help' },
  { name: 'Новости', link: 'news' },
  { name: 'Контакты', link: '/contacts' },
];
function Header() {
  const [showMe, setShowMe] = useState(false);
  const logo = '/logo5.png';

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
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex flex-row justify-between py-4">
              <Image src={logo} alt="logo" height={32} width={50} />
              <Disclosure.Button className="p-2">
                <Bars3Icon
                  className={
                    open
                      ? 'rotate-90 duration-300 transform h-9 w-9 text-gray-900'
                      : 'duration-300  h-9 w-9 text-gray-900'
                  }
                />
              </Disclosure.Button>
            </div>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-gray-500 pb-4 ">
                <div className="flex flex-col text-black">
                  {navbars.map((nav) => (
                    <button className="btn-nav" key={nav.name}>
                      <Link href={nav.link}>{nav.name}</Link>
                    </button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
export default Header;
