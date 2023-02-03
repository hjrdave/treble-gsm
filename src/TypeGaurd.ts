

export type Types = 'number' | 'string' | 'boolean' | 'object' | 'array' | 'null' | 'undefined' | 'symbol' | 'bigint' | 'Map' | 'Set'

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
        return typeof value === 'object';
    }

    isArray = (value: any) => {
        return Array.isArray(value);
    }

    isNull = (value: any) => {
        return value === null;
    }

    isUndefined = (value: any) => {
        return value === null;
    }

    isSymbol = (value: any) => {
        return value === null;
    }

    isBigint = (value: any) => {
        return value === null;
    }

    isMap = (value: any) => {
        return value === null;
    }

    isSet = (value: any) => {
        return value === null;
    }

    doesTypePass = (value: any, type: Types) => {
        const types = {
            'number': () => (this.isNumber(value)),
            'string': () => (this.isString(value)),
            'boolean': () => (this.isBoolean(value)),
            'object': () => (this.isObject(value)),
            'array': () => (this.isArray(value)),
            'null': () => (this.isNull(value)),
            'undefined': () => (this.isUndefined(value)),
            'symbol': () => (this.isSymbol(value)),
            'bigint': () => (this.isBigint(value)),
            'Map': () => (this.isMap(value)),
            'Set': () => (this.isSet(value)),
        }
        return types[type]();
    }

    public constructor() {

    }
};


