import { IStoreItem } from '../../interfaces';
const createActionsHelper = (store: IStoreItem[]) => {

    let actions = {};
    store?.map((storeItem) => {
        actions = {
            ...actions,
            [storeItem.action]: storeItem.action
        }
    })
    return actions as typeof actions;

}

export default createActionsHelper;