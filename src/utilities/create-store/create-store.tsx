/*
    createStore
    This is imported into app to create new store and provide proper typings.
*/
import {ICreateStore} from './interfaces';
import errorHandling from './error-handling';

const createStore: ICreateStore = (storeData, object) => {
    
    errorHandling(storeData);
    
    let  store = {
        data: storeData,
        scope: object?.options?.context
    }
    return store
}

export default createStore;

