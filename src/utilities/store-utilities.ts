/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionsHelper, getActions, getStateKeys, getCurrentStoreData } from './methods';
import { IStoreUtilities } from './interfaces';
import { IStoreItem } from '../interfaces';

const storeUtilties = (store: IStoreItem[]) => {

    const returnedActionArray = getActions(store);
    const returnedStateKeys = getStateKeys(store);
    const returnedStoreData = getCurrentStoreData(store);

    const utiltiesObject: IStoreUtilities = {
        actions: {
            ...createActionsHelper(store)
        },
        stateKeys: returnedActionArray,
        actionKeys: returnedStateKeys,
        storeData: returnedStoreData
    }

    return utiltiesObject
}

export default storeUtilties;