/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionsHelper, getActions, getStateKeys, getCurrentStoreData } from './methods';
import { IStoreUtilities } from './interfaces';
import { IStoreItem } from '../interfaces';

const storeUtilties = (store: IStoreItem[]) => {

    let returnedActionArray = getActions(store);
    let returnedStateKeys = getStateKeys(store);
    let returnedStoreData = getCurrentStoreData(store);

    let utiltiesObject: IStoreUtilities = {
        actions: {
            ...createActionsHelper(store)
        },
        stateKeys: returnedStateKeys,
        actionKeys: returnedActionArray,
        storeData: returnedStoreData
    }

    return utiltiesObject
}

export default storeUtilties;