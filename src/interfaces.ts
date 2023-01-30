import Inventory from "./Inventory";

declare namespace ITrebleGSM {
    interface StoreItem {
        key: string,
        state: any,
        features: {
            persist?: boolean
        }
    }
    interface DispatchItem {
        key: string,
        currentState: any;
        newState: any;
    }
}

export type { ITrebleGSM };