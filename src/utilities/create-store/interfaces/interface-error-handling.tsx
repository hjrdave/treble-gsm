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
                persist?: boolean
            }
        }[]
    ) : void
}