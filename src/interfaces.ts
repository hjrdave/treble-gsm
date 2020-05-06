/*
    Shared Interfaces
*/
export interface IStoreItem{
    action: string,
    state: {
        [key:string]: any
    },
    features?: {
        persist?: boolean,
        call?: (state: any) => void,
        check?: (state: any) => boolean,
        convert?: (state: any) => any
    }
}

export interface IStoreOptions{
    context?: React.Context<never[]>,
    extendStore?: {data: IStoreItem[]}[]
}