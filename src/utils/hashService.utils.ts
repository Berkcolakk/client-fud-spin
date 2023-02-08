
export function b64e(str: any) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);

    }));
}

export function b64d(str: any) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    }).join(''));

}