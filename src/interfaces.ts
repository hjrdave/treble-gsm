/*
    Shared Interfaces
*/

export interface IStoreFeatures{
    persist?: boolean,
    keys?: boolean,
    call?: (state: any) => void,
    check?: (state: any) => boolean,
    process?: (state: any) => any,
    callback?: (state:any) => void
}

export interface IStoreItem{
    action: string,
    state: {
        [key:string]: any
    },
    features?: IStoreFeatures
}

export interface IStoreOptions{
    context?: React.Context<never[]>,
    extendStore?: {data: IStoreItem[]}[],
    modules?: any[]
}