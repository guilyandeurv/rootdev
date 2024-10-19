const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value) {
    switch (typeof value) {
        case 'number': {
            return Number.isInteger(value) && value >= 0 && value < Number.MAX_SAFE_INTEGER;
        }
        case 'symbol': {
            return false;
        }
        case 'string': {
            return IS_UNSIGNED_INTEGER.test(value);
        }
    }
}

export { isIndex };
