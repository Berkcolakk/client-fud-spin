import { b64d, b64e } from '@utils/hashService.utils';
import { setCookie, getCookie, removeCookies } from 'cookies-next';

export const insertStorageItem = (key: string, myObject: any) => {
    localStorage.setItem(key, b64e(JSON.stringify(myObject)));
}

export const getStorageItem = (key: string) => {
    var myObject: any = localStorage.getItem(key);
    if (myObject === null)
        return null;
    return b64d(myObject) && JSON.parse(b64d(myObject));
}
export const setCookieObjectHash = (name: string, value: any, days: any) => {
    if (!value)
        return;
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));

    setCookie(name, b64e(JSON.stringify(value)), { expires: d, path: "/" });
}
export const getCookieObjectHash = (name: string) => {
    const item = getCookie(name);
    if (!item) {
        return null;
    }
    return b64d(item) && JSON.parse(b64d(item));
}
export { removeCookies }