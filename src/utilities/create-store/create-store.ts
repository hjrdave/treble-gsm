/*
    createStore
    This is imported into app to create new store and provide proper typings.
*/
import {ICreateStore} from './interfaces';
import errorHandling from './error-handling';

const createStore: ICreateStore = (storeData, options) => {
    
    //error handles storeItems
    errorHandling(storeData);

    //handle extendStore array
    const handleExtendStore = (extendStoreProp: any) => {
        
        
        let array = extendStoreProp.map((data: any) => {
            return data;
        });
        let flattenedArray:any = array.reduce((arr: any, elem: any) => [...arr, ...elem.data],[]);
        return flattenedArray;
    }

    //Checks to see if extendStore option exists and combines them wi
    let extendedStoreData = (options?.extendStore) ? handleExtendStore(options?.extendStore) : false;

    // let extendedStoreData = (options?.extendStore) ? options?.extendStore[0].data?.map((stateItem) => {
    //     return stateItem
    // }) : false;

    let  store = {
        data: (extendedStoreData) ? [...storeData, ...extendedStoreData] : storeData,
        scope: options?.context
    }
    return store
}

export default createStore;

