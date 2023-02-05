
export const MenuList = () => {
    const menuArr = [
        { ID: 1, MenuName: "Stats", Href: "/Stats", Auth: true, AuthorizedDisplay: true, Order: 5 },
        { ID: 2, MenuName: "Leaders", Href: "/Leaders", Auth: false, AuthorizedDisplay: true, Order: 4 },
        { ID: 3, MenuName: "Socials", Href: "/Social", Auth: true, AuthorizedDisplay: true, Order: 3 },
        { ID: 4, MenuName: "News", Href: "/News", Auth: true, AuthorizedDisplay: true, Order: 2 },
        { ID: 5, MenuName: "Profile", Href: "/Profile", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 6, MenuName: "Login", Href: "/Login", Auth: false, AuthorizedDisplay: false, Order: 6 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}

export const ProfileMenuList = () => {
    const menuArr = [
        { ID: 1, MenuName: "Settings", Href: "/Settings", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 2, MenuName: "Logout", Href: "/Logout", Auth: false, AuthorizedDisplay: true, Order: 2 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}