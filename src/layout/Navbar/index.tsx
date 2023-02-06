"use client";
import { useEffect } from 'react';
import GenerateMenuList from '@/layout/Navbar/GenerateMenuList';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { GenerateProfileMenu, ProfileMenuButton } from './ProfileMenu';
import { Menu } from '@headlessui/react';
import UseFudSpinContext from "@/context/appContext";
export const Navbar = () => {
    const { MobileNav, SetMobileNav, DarkTheme, SetDarkTheme } = UseFudSpinContext();

    const handleNav = () => {
        SetMobileNav(!MobileNav);
    };
    const setDarkMode = () => {
        document.documentElement.classList.add('dark');
        SetDarkTheme(true);
    }
    const setLightMode = () => {
        document.documentElement.classList.remove('dark');
        SetDarkTheme(false);
    }
    const getPreferredColorScheme = () => {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
            }
        }
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
        if (DarkTheme) {
            localStorage.theme = "light";
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add('dark');
        }
        SetDarkTheme(!DarkTheme);
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-52 h-20 mx-auto" priority={true}
                    />
                </Link>
                <div className="flex items-center md:order-2">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <button type='button' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' onClick={(e) => themeChangeHandle(e)}>
                                {!DarkTheme ? <FontAwesomeIcon icon={faMoon} size='xl' />
                                    : <FontAwesomeIcon icon={faLightbulb} size='xl' />
                                }
                            </button>
                            <ProfileMenuButton />
                        </div>
                        <GenerateProfileMenu />
                    </Menu>
                    <button onClick={handleNav} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <FontAwesomeIcon icon={faBars} size='xl' />
                    </button>
                </div>
                <div className={MobileNav ? "items-center justify-between w-full md:flex md:w-auto md:order-1" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"}>
                    <GenerateMenuList />
                </div>
            </div>
        </nav>
    );

}

export default Navbar;