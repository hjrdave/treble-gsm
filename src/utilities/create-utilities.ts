/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionHelpers, getActions, getStateKeys, getCurrentStoreData } from './methods';
import { TrebleGSM } from '../interfaces';

const createUtilities = (store: TrebleGSM.StoreItem[]) => {

    const returnedActionArray = getActions(store);
    const returnedStateKeys = getStateKeys(store);
    const returnedStoreData = getCurrentStoreData(store);

    const utiltiesObject: TrebleGSM.SubscribeAPI.Utilities = {
        actions: {
            ...createActionHelpers(store)
        },
        stateKeys: returnedActionArray,
        actionKeys: returnedStateKeys,
        storeData: returnedStoreData
    }

    return utiltiesObject
}

export default createUtilities;