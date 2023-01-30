/**
 * This is the new API for TrebleGSM V5
 * */
import Store from "./Store";
import { ITrebleGSM } from "./interfaces";

export default class TrebleGSM {

    //Holds Store state, features, and CRUD methods
    private store: Store;

    //Returns a current snapshot of the Store
    getInventory = () => {
        return this.store.entries();
    }

    //Addes new item with initial state to Store
    addItem = (item: ITrebleGSM.StoreItem) => {
        this.store.new(item);
    }

    //Set individual state by key
    setState = (key: string, value: any) => {
        this.store.set(key, value);
    }

    //Get individual state by key
    getState = (key: string) => {
        return this.store.get(key)?.state;
    }

    //Listens to state changes and then fires callback everytime a state changes
    onUpdate = (callbackfn: (item: ITrebleGSM.DispatchItem) => void) => {
        this.store.onEvent(callbackfn);
    }
    public constructor() {
        this.store = new Store()
    }
};


