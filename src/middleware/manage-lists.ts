/*
    Manage Lists
    - Middleware that manages list state and provides access to Store to SubscribeAPI methods.
*/

import { IReducerAction, IStoreState, IStoreFeatures } from "../interfaces";
import listManagement from './list-management';

interface IManageLists {
    (
        dispatchValue: any,
        storeItem: {
            action: string;
            state: IStoreState;
            features?: IStoreFeatures | undefined;
        },
        state: IStoreState,
        action: IReducerAction
    ): any
}


const manageLists: IManageLists = (dispatchValue, storeItem, state, action) => {

    let processMiddleware = storeItem?.features?.process || null;


    //allows process to be ran on dispatchValue before outputed to list
    if (processMiddleware !== null) {
        let processedState = processMiddleware(listManagement(dispatchValue, storeItem as any, state, action));
        return processedState;
    }
    return listManagement(dispatchValue, storeItem as any, state, action);


}

export default manageLists;