

export type Types = 'number' | 'string' | 'boolean' | 'object' | 'array' | 'null';

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

    doesTypePass = (value: any, type?: Types) => {
        if (type !== undefined) {
            const types = {
                'number': () => (this.isNumber(value)),
                'string': () => (this.isString(value)),
                'boolean': () => (this.isBoolean(value)),
                'object': () => (this.isObject(value)),
                'array': () => (this.isArray(value)),
                'null': () => (this.isNull(value))
            }
            return types[type]();
        } else {
            return true;
        }
    }

    public constructor() {

    }
};


