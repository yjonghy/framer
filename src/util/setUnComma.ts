export const unComma = (str : string) => {
    str = String(str);
    return str.replace(/[^\d]+/g, "");
};