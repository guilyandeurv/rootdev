import { cloneDeep as cloneDeep$1, copyProperties } from '../../object/cloneDeep.mjs';
import { argumentsTag, booleanTag, stringTag, numberTag } from '../_internal/tags.mjs';

function cloneDeep(obj) {
    if (typeof obj !== 'object') {
        return cloneDeep$1(obj);
    }
    switch (Object.prototype.toString.call(obj)) {
        case numberTag:
        case stringTag:
        case booleanTag: {
            const result = new obj.constructor(obj?.valueOf());
            copyProperties(result, obj);
            return result;
        }
        case argumentsTag: {
            const result = {};
            copyProperties(result, obj);
            result.length = obj.length;
            result[Symbol.iterator] = obj[Symbol.iterator];
            return result;
        }
        default: {
            return cloneDeep$1(obj);
        }
    }
}

export { cloneDeep };
