import TypeGuard, { Types } from "./TypeGaurd";
import Inventory from "./Inventory";

export default class Middleware {

    private inventory: Inventory;
    private typeGaurd = new TypeGuard();

    doesTypePass = (value: any, type: Types) => {
        return this.typeGaurd.doesTypePass(value, type);
    }

    log = (fn: (item: any) => void) => {

    }

    run = (fn: (item: any) => void) => {

    }

    check = (fn: (item: any) => boolean) => {
        return true;
    }

    process = (fn: (item: any) => any) => {

    }

    callback = (fn: (item: any) => void) => {

    }


    public constructor(inventory: Inventory) {
        this.inventory = new Inventory;
    }
};


