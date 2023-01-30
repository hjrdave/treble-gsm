export default class Inventory extends Map {
    set(key: string | symbol, value: any) {
        return super.set(key, value);
    }
    get(key: string | symbol) {
        return super.get(key);
    }
}