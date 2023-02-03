export const b64e = (str: string) => btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));

export const b64d = (str: string) => decodeURIComponent(Array.prototype.map.call(atob(str), c => '%' + c.charCodeAt(0).toString(16)).join(''));

// Explanation:
// The refactored code is more concise and easier to read. The arrow functions have been used to replace the anonymous functions and the return statements have been removed as they are implicit when using arrow functions.