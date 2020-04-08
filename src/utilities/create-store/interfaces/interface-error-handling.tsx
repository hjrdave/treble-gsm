/*
    interface for error-handling
*/

export default interface ICreateStore {
    (
        storeData:  {
            action: string,
            state: {
                [key:string]: any
            },
            features?: {
                persist?: boolean,
                call?: (state?: any) => void,
                check?: (state: any) => boolean,
                convert?: (state: any) => any
            }
        }[]
    ) : void
}