import Translation from '@localization/Translation';
export const MenuList = () => {
    const { lang } = Translation();
    const menuArr = [
        { ID: 1, MenuName: lang("menu.stats"), Href: "/Stats", Auth: true, AuthorizedDisplay: true, Order: 5 },
        { ID: 2, MenuName: lang("menu.leaders"), Href: "/Leaders", Auth: false, AuthorizedDisplay: true, Order: 4 },
        { ID: 3, MenuName: lang("menu.social"), Href: "/Social", Auth: true, AuthorizedDisplay: true, Order: 3 },
        { ID: 4, MenuName: lang("menu.news"), Href: "/News", Auth: true, AuthorizedDisplay: true, Order: 2 },
        { ID: 5, MenuName: lang("menu.profile"), Href: "/Profile", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 6, MenuName: lang("menu.login"), Href: "/Login", Auth: false, AuthorizedDisplay: false, Order: 6 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}

export const ProfileMenuList = () => {
    const { lang } = Translation();
    const menuArr = [
        { ID: 1, MenuName: lang("menu.profile.settings"), Href: "/Settings", Auth: true, AuthorizedDisplay: true, Order: 1 },
        { ID: 2, MenuName: lang("menu.profile.logout"), Href: "/Logout", Auth: false, AuthorizedDisplay: true, Order: 2 }
    ].sort((a, b) => a.Order - b.Order)
    return menuArr;
}