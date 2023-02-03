import Dispatcher, { DispatchItem } from "./Dispatcher";
import { Types } from "./TypeGaurd";
import Inventory from "./Inventory";
import Manager from "./Manager";

export interface StoreItem {
    key: string;
    state: any;
    type?: Types;
    features: {
        persist?: boolean;
    }
}
export default class Store {

    //Managers
    private stateManager: Manager;
    private featureManager: Manager;

    //Dispatcher
    private dispatcher: Dispatcher;

    getItems = () => {
        return this.stateManager.getItems().map((item) => ({
            key: item[0],
            state: item[1],
            features: this.featureManager.get(item[0])
        }));
    }
    new = (item: StoreItem) => {
        this.stateManager.update(item.key, item.state);
        this.featureManager.update(item.key, item.features);
    }
    get = (key: string) => {
        if (this.stateManager.has(key)) {
            return {
                key: key,
                state: this.stateManager.get(key),
                features: this.featureManager.get(key)
            }
        } else {
            return undefined
        }

    }
    set = (key: string, state: any) => {
        if (this.stateManager.has(key)) {
            this.dispatcher.dispatch({
                key: key,
                currentState: this.get(key)?.state,
                newState: state
            });
            this.stateManager.update(key, state);
        } else {
            console.error(`State "${key}" does not exist.`);
        }
    }

    onDispatch = (callbackfn: (item: DispatchItem) => void) => {
        this.stateManager.process((value, key) => this.dispatcher.stopListening(key));
        this.stateManager.process((value, key) => this.dispatcher.listen(key, callbackfn));
    }

    public constructor() {
        this.stateManager = new Manager(new Inventory);
        this.featureManager = new Manager(new Inventory);
        this.dispatcher = new Dispatcher();
    }
};


