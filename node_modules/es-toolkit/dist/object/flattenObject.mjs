import { isPlainObject } from '../predicate/isPlainObject.mjs';

function flattenObject(object) {
    return flattenObjectImpl(object);
}
function flattenObjectImpl(object, prefix = '') {
    const result = {};
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = object[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;
        if (isPlainObject(value) && Object.keys(value).length > 0) {
            Object.assign(result, flattenObjectImpl(value, prefixedKey));
            continue;
        }
        if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
                result[`${prefixedKey}.${index}`] = value[index];
            }
            continue;
        }
        result[prefixedKey] = value;
    }
    return result;
}

export { flattenObject };
