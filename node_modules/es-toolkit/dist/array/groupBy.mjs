function groupBy(arr, getKeyFromItem) {
    const result = Object.create(null);
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const key = getKeyFromItem(item);
        if (result[key] == null) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

export { groupBy };
