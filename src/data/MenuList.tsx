
export const MenuList = () => {
    const menuArr = [
        { ID: 1, MenuName: "menu.stats", Href: "/Stats", Auth: true, AuthorizedDisplay: true, Order: 5 },
        { ID: 2, MenuName: "menu.leaders", Href: "/Leaders", Auth: false, AuthorizedDisplay: true, Order: 4 },
        { ID: 3, MenuName: "menu.social", Href: "/Social", Auth: true, AuthorizedDisplay: true, Order: 3 },
        { ID: 4, MenuName: "menu.news", Href: "/News", Auth: true, AuthorizedDisplay: true, Order: 2 },
        { ID: 5, MenuName: "menu.profile", Href: "/Profile", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 6, MenuName: "menu.login", Href: "/Login", Auth: false, AuthorizedDisplay: false, Order: 6 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}

export const ProfileMenuList = () => {
    const menuArr = [
        { ID: 1, MenuName: "menu.profile.settings", Href: "/Settings", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 2, MenuName: "menu.profile.logout", Href: "/", Auth: false, AuthorizedDisplay: true, Order: 2 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}
export const GetUnAuthorizedMenu = () => {
    const unAuthorizedMenuList = MenuList().filter((item) => (item.Auth == false));
    return { unAuthorizedMenuList }
}

export const GetAuthorizedMenu = () => {
    const menuList = MenuList().filter((item) => (item.Auth == true && item.AuthorizedDisplay == true));
    const profileMenuList = ProfileMenuList();
    return { menuList, profileMenuList }
}