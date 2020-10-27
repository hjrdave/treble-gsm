export interface IDefaultActionTypes {
    [key: string]: string
}
export interface IStoreUtilities<T = void> {
    actions: T | {[key:string]: string};
    stateKeys: string[];
    actionKeys: string[];
    storeData: any
}