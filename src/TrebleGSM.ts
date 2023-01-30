/**
 * This is the new API for TrebleGSM V5
 * */
import Store from "./Store";
import { ITrebleGSM } from "./interfaces";

export default class TrebleGSM {

    private store: Store;

    addItem = (item: ITrebleGSM.StoreItem) => {
        this.store.new(item);
    }
    getInventory = () => {
        return this.store.entries();
    }
    setState = (key: string, value: any) => {
        this.store.set(key, value);
    }
    getState = (key: string) => {
        this.store.get(key);
    }
    onUpdate = (callbackfn: (item: ITrebleGSM.DispatchItem) => void) => {
        this.store.onEvent(callbackfn);
    }
    public constructor() {
        this.store = new Store()
    }
};


