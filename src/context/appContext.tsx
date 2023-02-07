"use client"
import SpinnerList from '@/components/Spinner/SpinnerList';
import { error } from 'console';
import { useContext, createContext, useMemo, useState, useEffect } from 'react';
import { IWheel } from '@interfaces/Wheels/WheelsInterfaces';
import { IUser } from '@interfaces/Users/UsersInterfaces';
import { IMenu } from '@interfaces/MenusInterfaces/MenusInterfaces';
import { GetAuthorizedMenu, GetUnAuthorizedMenu } from '@/data/MenuList';
import { getUser } from '@utils/getUser.utils';
import { v4 as uuidv4 } from 'uuid';
import EN from '@localization/EN.json';
import TR from '@localization/TR.json';

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
    CurrentLanguageList: any;
    Name: any;
    SetName: any;
    Surname: any;
    SetSurname: any;
    PhoneNumber: any;
    SetPhoneNumber: any;
    Gender: any;
    SetGender: any;
    DateOfBirth: any;
    SetDateOfBirth: any;
}
const FudSpinContext = createContext<IContext>({});
interface IFudSpinProvider {
    children: any;
}
export const FudSpinProvider = ({ children }: IFudSpinProvider) => {
    /**Spinner states. */
    const DefaultSpinnerList = [
        {
            id: uuidv4(),
            name: "Pizzas",
            color: "#AA5656"
        },
        {
            id: uuidv4(),
            name: "Hamburger",
            color: "#FFEA20"
        },
        {
            id: uuidv4(),
            name: "Pastas",
            color: "#CD0404"
        },
        {
            id: uuidv4(),
            name: "Risotto",
            color: "#A31ACB"
        },
        {
            id: uuidv4(),
            name: "Doner",
            color: "#FF6E31"
        }
    ]
    const [Spinners, SetSpinners] = useState<Array<IWheel>>(DefaultSpinnerList);
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
    const [Name, SetName] = useState<string>("");
    const [Surname, SetSurname] = useState<string>("");
    const [PhoneNumber, SetPhoneNumber] = useState<string>("");
    const [Gender, SetGender] = useState<number>(1);
    const [DateOfBirth, SetDateOfBirth] = useState<string>("");
    /**Login && Register states. */

    /**Language states */
    const [CurrentLanguage, SetCurrentLanguage] = useState<any>([]);

    const [CurrentLanguageList, SetCurrentLanguageList] = useState<any>([]);
    /**Language states */

    useEffect(() => {
        /**Navbar Menu Setter. */
        const { menuList, profileMenuList } = GetAuthorizedMenu();
        const { unAuthorizedMenuList } = GetUnAuthorizedMenu();
        if ((!ArraysAreEqual(MenuList, menuList) || !ArraysAreEqual(profileMenuList, ProfileMenuList)) && IsAuth) {
            SetMenuList(menuList);
            SetProfileMenuList(profileMenuList);
        } else if ((!ArraysAreEqual(MenuList, unAuthorizedMenuList)) && !IsAuth) {
            SetMenuList(unAuthorizedMenuList);
        }
    }, [IsAuth])
    const ArraysAreEqual = (ary1: any, ary2: any) => {
        return (ary1.join('') == ary2.join(''));
    }
    useEffect(() => {
        const { authUser, isValid } = getUser();
        SetIsAuth(isValid);
        SetAuthObj(authUser);
        SetCurrentLanguage(authUser?.Language || "EN");
    }, [])
    useEffect(() => {
        switch (CurrentLanguage) {
            case "EN":
                SetCurrentLanguageList(EN);
                break;
            case "TR":
                SetCurrentLanguageList(TR);
                break;
            default:
                SetCurrentLanguageList(EN);
                break;
        }
    }, [CurrentLanguage])
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
            SetUserPassword,
            CurrentLanguageList,
            DateOfBirth,
            SetDateOfBirth,
            Gender,
            SetGender,
            SetName,
            Name,
            PhoneNumber,
            SetPhoneNumber,
            SetSurname,
            Surname
        }}>{children}
        </FudSpinContext.Provider>);
}
const UseFudSpinContext = () => {
    const context = useContext(FudSpinContext)
    return context;
}
export default UseFudSpinContext;