/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionsHelper, getActions, getStateKeys, getCurrentStoreData } from './methods';
import { TrebleGSM } from '../interfaces';

const storeUtilties = (store: TrebleGSM.StoreItem[]) => {

    const returnedActionArray = getActions(store);
    const returnedStateKeys = getStateKeys(store);
    const returnedStoreData = getCurrentStoreData(store);

    const utiltiesObject: TrebleGSM.StoreUtilities = {
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