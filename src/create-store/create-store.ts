/*
    createStore
    This is imported into app to create new store and provide proper typings.
*/
import { ICreateStore } from './interfaces';
import errorHandling from './error-handling';
import { TrebleGSM } from '../interfaces';



const createStore: ICreateStore = (storeData, options) => {

    //error handles storeItems
    // errorHandling(storeData);

    //handle extendStore array
    const handleExtendStore = (extendStoreProp: { data: TrebleGSM.StoreItem[] }[]) => {
        //created multidimensional array from extendStore property array
        const array = extendStoreProp.map((data: { data: TrebleGSM.StoreItem[] }) => {
            return data;
        });
        //flattens array so it can be passed to store.data prop
        const flattenedArray: TrebleGSM.StoreItem[] = array.reduce((arr: any, elem: any) => [...arr, ...elem.data], []);
        return flattenedArray;
    }

    //Checks to see if extendStore option exists and then processes it so it can be added to store.data prop
    const extendedStoreData: boolean | TrebleGSM.StoreItem[] = (options?.extendStore) ? handleExtendStore(options?.extendStore) : false;

    //store object that will be used by Treble
    const store = {
        data: (extendedStoreData) ? [...storeData, ...extendedStoreData] : storeData,
        scope: options?.context,
        modules: options?.modules,
        options: options
    }
    return store
}

export default createStore;

