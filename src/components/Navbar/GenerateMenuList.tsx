import { Menu } from "@types/NavbarTypes";
import Link from "next/link";
import { getUser } from "@utils/getUser.utils";

interface IProps {
    MenuList: Array<Menu>;
}
export const GenerateMenuList = ({ MenuList }: IProps): JSX.Element => {
    const { isValid } = getUser();
    return (
        <>
            {
                MenuList.map((item, i) => {
                    if ((item.Auth && !isValid) || (isValid && !item.AuthorizedDisplay)) {
                        return null;
                    }
                    return (
                        <li key={item.ID}>
                            <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" title={item.MenuName} href={item.Href}>{item.MenuName} </Link>
                        </li>
                    )
                })
            }
        </>
    )
}