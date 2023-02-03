import Inventory from "./Inventory";
import Middleware from "./Middleware";

export default class Manager {

    private inventory: Inventory;
    private middleware: Middleware;

    get = (key: string) => {
        if (this.inventory.has(key)) {
            return this.inventory.get(key);
        }
        console.warn('TrebleGSM: State does not exist.')
        return undefined;
    }

    add = (key: string, value: any) => {
        if (!this.inventory.has(key)) {
            this.inventory.set(key, value);
        } else {
            console.warn('TrebleGSM: A State with this key already exists.')
        }
    }

    update = (key: string, value: any) => {
        if (this.inventory.has(key)) {
            //middleware should go here.
            this.inventory.set(key, value);
        } else {
            console.warn('TrebleGSM: State does not exist.')
        }
    }

    remove = (key: string) => {
        return this.inventory.delete(key);
    }

    removeAll = () => {
        this.inventory.clear();
    }

    getItems = () => {
        return Array.from(this.inventory);
    }

    has = (key: string) => {
        return this.inventory.has(key);
    }

    process = (predicateFN: (value: any, key: string) => void) => {
        this.inventory.forEach(predicateFN);
    }

    public constructor(inventory: Inventory) {
        this.inventory = inventory;
        this.middleware = new Middleware(this.inventory)
    }
};


