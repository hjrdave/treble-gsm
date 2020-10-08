/*
    Utiltites Object that is outputed by useTreble
*/

import { createActionsHelper } from './methods';
import { IStoreUtilities } from './interfaces';
import { IStoreItem } from '../interfaces';

const storeUtilties = (store: IStoreItem[]) => {

    let utiltiesObject: { actions: { [key: string]: string } } = {
        actions: {
            ...createActionsHelper(store)
        }
    }

    return utiltiesObject
}

export default storeUtilties;