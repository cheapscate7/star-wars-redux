/**
 * removes values from a list if they equate to false
 * @param arr
 */
const removeUndefined = (arr: any[]) => {
    return arr.filter((item) => item);
};

export default removeUndefined;
