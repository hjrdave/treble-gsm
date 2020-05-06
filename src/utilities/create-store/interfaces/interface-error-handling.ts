/*
    interface for error-handling
*/
import {IStoreItem} from '../../../interfaces';
export default interface ICreateStore {
    (
        storeData: IStoreItem[]
    ) : void
}