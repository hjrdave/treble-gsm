import Dispatcher from "./Dispatcher";
import { ITrebleGSM } from "./interfaces";
import Inventory from "./Inventory";

export default class Store {

    //Store State Inventory
    private state: Inventory;

    //Store Feature Inventory
    private features: Inventory;
    private dispatcher: Dispatcher;
    private callbackfn?: (item: ITrebleGSM.DispatchItem) => void;

    entries = () => {
        return Array.from(this.state).map((item) => ({
            key: item[0],
            state: item[1],
            features: this.features.get(item[0])
        }));
    }
    new = (item: ITrebleGSM.StoreItem) => {
        this.state.set(item.key, item.state);
        this.features.set(item.key, item.features);
    }
    get = (key: string) => {
        if (this.state.has(key)) {
            return {
                key: key,
                state: this.state.get(key),
                features: this.features.get(key)
            }
        } else {
            return undefined
        }

    }
    set = (key: string, state: any) => {
        if (this.state.has(key)) {
            this.dispatcher.dispatch({
                key: key,
                currentState: this.get(key)?.state,
                newState: state
            });
            this.state.set(key, state);
        } else {
            console.error(`State "${key}" does not exist.`);
        }
    }

    onEvent = (callbackfn: (item: ITrebleGSM.DispatchItem) => void) => {
        this.state.forEach((value, key) => this.dispatcher.stopListening(key));
        this.state.forEach((value, key) => this.dispatcher.listen(key, callbackfn));
    }

    public constructor() {
        this.state = new Inventory();
        this.features = new Inventory();
        this.dispatcher = new Dispatcher();
    }
};


