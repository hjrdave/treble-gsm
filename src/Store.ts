import Dispatcher, { DispatchItem } from "./Dispatcher";
import { Types } from "./TypeGaurd";
import Inventory from "./Inventory";
import Manager from "./Manager";
import Middleware from "./Middleware";

export interface Features {
    persist?: boolean;
    log?: (item: DispatchItem) => void;
    check?: (item: DispatchItem) => boolean;
    process?: (item: DispatchItem) => DispatchItem;
    callback?: (item: DispatchItem) => void;
}
export interface StoreItem {
    key: string;
    state: any;
    type?: Types;
    features: Features
}
export default class Store {

    //Managers
    private stateManager: Manager<any>;
    private featureManager: Manager<Features>;

    //Dispatcher
    private dispatcher: Dispatcher;

    getItems = () => {
        return this.stateManager.getItems().map((item) => ({
            key: item[0],
            state: item[1],
            features: this.featureManager.get(item[0])
        }));
    }
    new = ({ key, state, features }: StoreItem) => {
        this.stateManager.add(key, state);
        this.featureManager.add(key, features);
    }
    get = (key: string) => {
        if (this.stateManager.has(key)) {
            const state = this.stateManager.get(key);
            const features = this.featureManager.get(key);
            const storeItem = {
                key: key,
                state: state,
                features: features
            }
            return storeItem
        } else {
            return undefined
        }
    }
    set = (key: string, state: any) => {
        if (this.stateManager.has(key)) {
            const middleware = new Middleware({
                key: key,
                currentState: this.get(key)?.state,
                dispatchState: state,
                state: state,
                features: this.featureManager.get(key)
            });
            this.dispatcher.dispatch(middleware.getDispatchItem());
            this.stateManager.update(middleware.getKey(), middleware.getState());
        } else {
            console.error(`TrebleGSM: State "${key}" does not exist.`);
        }
    }
    onDispatch = (callbackfn: (item: DispatchItem) => void) => {
        this.stateManager.forEach((value, key) => this.dispatcher.stopListening(key));
        this.stateManager.forEach((value, key) => this.dispatcher.listen(key, callbackfn));
    }

    public constructor() {
        this.stateManager = new Manager(new Inventory);
        this.featureManager = new Manager(new Inventory);
        this.dispatcher = new Dispatcher();
    }
};


