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
        //created multidimensional array from extendStore property array
        let array = extendStoreProp.map((data: any) => {
            return data;
        });
        //flattens array so it can be passed to store.data prop
        let flattenedArray:any = array.reduce((arr: any, elem: any) => [...arr, ...elem.data],[]);
        return flattenedArray;
    }

    //Checks to see if extendStore option exists and then processes it so it can be added to store.data prop
    let extendedStoreData = (options?.extendStore) ? handleExtendStore(options?.extendStore) : false;

    //store object that will be used by Treble
    let  store = {
        data: (extendedStoreData) ? [...storeData, ...extendedStoreData] : storeData,
        scope: options?.context
    }
    return store
}

export default createStore;

