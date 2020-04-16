/*
    createStore
    This is imported into app to create new store and provide proper typings.
*/
import {ICreateStore} from './interfaces';
import errorHandling from './error-handling';

const createStore: ICreateStore = (storeData, options) => {
    
    errorHandling(storeData);
    
    let  store = {
        data: storeData,
        scope: options?.context
    }
    return store
}

export default createStore;

