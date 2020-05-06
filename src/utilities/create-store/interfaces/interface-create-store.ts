/*
    interface for createStore and error-handling
*/
import {IStoreItem, IStoreOptions} from '../../../interfaces';

export default interface ICreateStore {
    (
        storeData: IStoreItem[],
        options?: IStoreOptions
    ): {
        data: IStoreItem[],
        options?: IStoreOptions
        } 
    }