import { IMenu } from '@interfaces/MenusInterfaces/MenusInterfaces';
import { Menu } from '@headlessui/react';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LoadingBox from '@/components/Helpers/LoadingBox';
import { getUser } from "@utils/getUser.utils";
import { ProfileMenuList } from '../../data/MenuList';
import NavbarStore from '@/store/NavbarStore';
const ProfileMenuButton = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, [])
    if (loading) {
        return <LoadingBox />
    }
    const { isValid } = getUser();
    return (
        isValid ?
            <Menu.Button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer' >
                <FontAwesomeIcon icon={faUser} size='xl' />
            </Menu.Button >
            : <></>
    )
}
interface IGenerateProfileMenuProps {
    ProfileMenus: Array<IMenu>
}
const GenerateProfileMenu = () => {
    const [loading, setLoading] = useState(true);
    const store = NavbarStore();
    useEffect(() => {
        store.setProfileMenuList(ProfileMenuList())
        setLoading(false);
    }, [])
    if (loading) {
        return <></>
    }
    return (
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
                {store.ProfileMenuList.map((item) => (
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
export { ProfileMenuButton, GenerateProfileMenu }