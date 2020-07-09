/*
    interface for createStore and error-handling
*/
import {IStoreItem, IStoreOptions} from '../../interfaces';

export interface ICreateStore {
    (
        storeData: IStoreItem[],
        options?: IStoreOptions
    ): {
        data: IStoreItem[],
        options?: IStoreOptions
        } 
    }

export interface IErrorHandling {
    (
        storeData: IStoreItem[],
        options?: IStoreOptions
    ): void
}