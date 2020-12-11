/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionHelpers, getActions, getStateKeys, getCurrentStoreData } from './methods';
import { TrebleGSM } from '../interfaces';

const createUtilities = (store: TrebleGSM.StoreItem[], modules: TrebleGSM.ModuleData[]) => {

    const returnedActionArray = getActions(store);
    const returnedStateKeys = getStateKeys(store);
    const returnedStoreData = getCurrentStoreData(store);

    const utiltiesObject: TrebleGSM.Utilities = {
        actions: {
            ...createActionHelpers(store)
        },
        stateKeys: returnedActionArray,
        actionKeys: returnedStateKeys,
        storeData: returnedStoreData,
        moduleData: modules
    }

    return utiltiesObject
}

export default createUtilities;