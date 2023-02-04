

export type Types = 'number' | 'string' | 'boolean' | 'object' | 'array' | 'null' | 'symbol' | 'bigint' | 'Map' | 'Set'

export default class TypeGuard {

    isNumber = (value: any) => {
        return typeof value === 'number';
    }

    isString = (value: any) => {
        return typeof value === 'string';
    }

    isBoolean = (value: any) => {
        return typeof value === 'boolean';
    }

    isObject = (value: any) => {
        return typeof value === 'object' && value !== null;
    }

    isArray = (value: any) => {
        return Array.isArray(value);
    }

    isNull = (value: any) => {
        return value === null;
    }

    isSymbol = (value: any) => {
        return typeof value === 'symbol';
    }

    isBigint = (value: any) => {
        return typeof value === 'bigint';
    }

    isMap = (value: any) => {
        return value instanceof Map;
    }

    isSet = (value: any) => {
        return value instanceof Set;
    }

    doesTypePass = (value: any, type?: Types) => {
        if (type) {
            const types = {
                'number': () => (this.isNumber(value)),
                'string': () => (this.isString(value)),
                'boolean': () => (this.isBoolean(value)),
                'object': () => (this.isObject(value)),
                'array': () => (this.isArray(value)),
                'null': () => (this.isNull(value)),
                'symbol': () => (this.isSymbol(value)),
                'bigint': () => (this.isBigint(value)),
                'Map': () => (this.isMap(value)),
                'Set': () => (this.isSet(value)),
            }
            return types[type]();
        }
        return true;
    }

    public constructor() {

    }
};


