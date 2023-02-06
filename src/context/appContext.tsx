"use client"
import SpinnerList from '@/components/Spinner/SpinnerList';
import { error } from 'console';
import { useContext, createContext, useMemo, useState, useEffect } from 'react';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import { IUser } from '@interfaces/Users/UsersInterfaces';
import { IMenu } from '@interfaces/MenusInterfaces/MenusInterfaces';
import { GetAuthorizedMenu, GetUnAuthorizedMenu } from '@/data/MenuList';
import { getUser } from '@utils/getUser.utils';
import { removeCookies } from '@utils/storageHash.utils';
interface IContext {
    Spinners: Array<IWheel>;
    SetSpinners: any;
    SpinnerSelectedItem: any;
    SetSpinnerSelectedItem: any;
    DarkTheme: any;
    SetDarkTheme: any;
    MobileNav: any;
    SetMobileNav: any;
    ProfileMenuList: any;
    SetProfileMenuList: any;
    MenuList: any;
    SetMenuList: any;
    IsAuth: any;
    SetIsAuth: any;
    SpinnerWheelName: any;
    SetSpinnerWheelName: any;
    AuthObj: any;
    SetAuthObj: any;
    UserEmail: any;
    SetEmail: any;
    UserPassword: any;
    SetUserPassword: any;
}

const FudSpinContext = createContext<IContext>({});
interface IFudSpinProvider {
    children: any;
}
export const FudSpinProvider = ({ children }: IFudSpinProvider) => {
    /**Spinner states. */
    const [Spinners, SetSpinners] = useState<Array<IWheel>>([]);
    const [SpinnerWheelName, SetSpinnerWheelName] = useState<string>("");
    const [SpinnerSelectedItem, SetSpinnerSelectedItem] = useState<any>(null);
    /**Spinner states. */
    /**Menus states. */
    const [MenuList, SetMenuList] = useState<Array<IMenu>>([]);
    const [ProfileMenuList, SetProfileMenuList] = useState<Array<IMenu>>([]);
    const [DarkTheme, SetDarkTheme] = useState(true);
    const [MobileNav, SetMobileNav] = useState<boolean>(false);
    /**Menus states. */
    /**User states. */
    const [IsAuth, SetIsAuth] = useState(false);
    const [AuthObj, SetAuthObj] = useState({});
    /**User states. */
    /**Login && Register states. */
    const [UserEmail, SetEmail] = useState<string>("");
    const [UserPassword, SetUserPassword] = useState<string>("");
    /**Login states. */
    useEffect(() => {
        /**Navbar Menu Setter. */
        debugger;
        const { menuList, profileMenuList } = GetAuthorizedMenu();
        const { unAuthorizedMenuList } = GetUnAuthorizedMenu();
        if ((!arraysAreEqual(MenuList, menuList) || !arraysAreEqual(profileMenuList, ProfileMenuList)) && IsAuth) {
            SetMenuList(menuList);
            SetProfileMenuList(profileMenuList);
        } else if ((!arraysAreEqual(MenuList, unAuthorizedMenuList)) && !IsAuth) {
            SetMenuList(unAuthorizedMenuList);
        }
    }, [ProfileMenuList, MenuList, IsAuth])
    function arraysAreEqual(ary1: any, ary2: any) {
        return (ary1.join('') == ary2.join(''));
    }
    useEffect(() => {
        const { authUser, isValid } = getUser();
        SetIsAuth(isValid);
        SetAuthObj(authUser);
    }, [])
    return (
        <FudSpinContext.Provider value={{
            Spinners,
            SetSpinners,
            SpinnerSelectedItem,
            SetSpinnerSelectedItem,
            DarkTheme,
            SetDarkTheme,
            MobileNav,
            SetMobileNav,
            ProfileMenuList,
            SetProfileMenuList,
            MenuList,
            SetMenuList,
            IsAuth,
            SetIsAuth,
            SpinnerWheelName,
            SetSpinnerWheelName,
            AuthObj,
            SetAuthObj,
            UserEmail,
            SetEmail,
            UserPassword,
            SetUserPassword
        }}>{children}
        </FudSpinContext.Provider>);
}
const UseFudSpinContext = () => {
    const context = useContext(FudSpinContext)
    return context;
}
export default UseFudSpinContext;