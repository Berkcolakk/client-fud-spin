"use client"
import Link from "next/link";
import { IMenu } from "@interfaces/MenusInterfaces/MenusInterfaces";
import { getUser } from "@utils/getUser.utils";
import { useState, useEffect } from 'react';
import { MenuList } from '../../data/MenuList';
import UseFudSpinContext from '@/context/appContext';
import useTranslation from "@localization/Translation";

interface IProps {
    MenuList: Array<IMenu>;
}

export const GenerateMenuList = (): JSX.Element => {
    const [loading, setLoading] = useState(true);
    const { lang } = useTranslation();
    const { MenuList }:IProps = UseFudSpinContext();
    useEffect(() => {
        setLoading(false);
    }, [])
    // const { isValid } = getUser();
    if (loading) {
        return <></>
    }
    return (
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
                MenuList.map((item, i) => {
                    return (
                        <li key={item.ID}>
                            <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" title={lang(item.MenuName)} href={item.Href}>{lang(item.MenuName)} </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default GenerateMenuList;