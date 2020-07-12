/*
    interface for createStore and error-handling
*/
import {IStoreItem, IStoreOptions} from '../../interfaces';

export interface IErrorHandling {
    (
        storeData: IStoreItem[],
        options?: IStoreOptions
    ): void
}