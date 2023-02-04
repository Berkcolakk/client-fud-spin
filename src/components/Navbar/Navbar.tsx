"use client";
import { MenuList, ProfileMenuList } from './MenuList';
import { GenerateMenuList } from './GenerateMenuList';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { getUser } from "@utils/getUser.utils";
import Image from 'next/image';
import { IMenu } from '@interfaces/MenusInterfaces/MenusInterfaces';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const menus = MenuList();
  const profileMenus = ProfileMenuList();
  const handleNav = () => {
    setNav(!nav);
  };
  const setDarkMode = () => {
    document.documentElement.classList.add('dark');
    setTheme(true);
  }
  const setLightMode = () => {
    document.documentElement.classList.remove('dark');
    setTheme(false);
  }
  const getPreferredColorScheme = () => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  useEffect(() => {
    switch (localStorage.theme) {
      case "dark":
        setDarkMode();
        break;
      case "light":
        setLightMode();
        break;
      default:
        if (getPreferredColorScheme() == "dark") {
          localStorage.setItem("theme", "dark")
          setDarkMode();
        } else {
          localStorage.setItem("theme", "light")
          setLightMode();
        }
        break;
    }
  }, [])
  const themeChangeHandle = (e: any) => {
    if (theme) {
      localStorage.theme = "light";
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add('dark');
    }
    setTheme(!theme);
  }
  const { isValid } = getUser();
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-52 h-20 mx-auto" />
          </Link>
          <div className="flex items-center md:order-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <button type='button' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' onClick={(e) => themeChangeHandle(e)}>
                  {!theme ? <FontAwesomeIcon icon={faMoon} size='xl' />
                    : <FontAwesomeIcon icon={faLightbulb} size='xl' />
                  }
                </button>
                {isValid ?
                  <Menu.Button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                    <FontAwesomeIcon icon={faUser} size='xl' />
                  </Menu.Button>
                  : null}
              </div>
              <GenerateProfileMenu ProfileMenus={profileMenus} />
            </Menu>
            <button onClick={handleNav} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className={nav ? "items-center justify-between w-full md:flex md:w-auto md:order-1" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"} id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <GenerateMenuList MenuList={menus} UserIsValid={isValid} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );

};

interface IGenerateProfileMenuProps {
  ProfileMenus: Array<IMenu>
}
const GenerateProfileMenu = ({ ProfileMenus }: IGenerateProfileMenuProps) => {
  return (
    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="px-1 py-1 ">
        {ProfileMenus.map((item) => (
          <Menu.Item key={item.ID}>
            {({ active }) => (
              <Link href={item.Href} className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >{item.MenuName}</Link>
            )}
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  )
}
export default Navbar;