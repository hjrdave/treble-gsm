/*
    interface for createStore and error-handling
*/
import {TrebleGSM} from '../interfaces';

export interface IErrorHandling {
    (
        storeData: TrebleGSM.StoreItem[],
        options?: TrebleGSM.StoreOptions
    ): void
}

export interface ICreateStore {
  (
    storeData: TrebleGSM.StoreItem[],
    options?: TrebleGSM.StoreOptions
  ): {
    data: TrebleGSM.StoreItem[],
    options?: TrebleGSM.StoreOptions
  }
}