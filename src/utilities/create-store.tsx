/*
    createStore
    This is imported into app to create new store and provide proper typings.
*/

interface ICreateStore {
    (
        storeData:  {
            action: string,
            state: {
                [key:string]: any
            },
            features?: {
                persist?: boolean
            }
        }[],
        scope?: React.Context<never[]>
    ): {
        data: {
            action: string,
            state: {
                [key:string]: any
            },
            features?: {
                persist?: boolean
            }
        }[],
        scope?: React.Context<never[]>
    }
}

const createStore: ICreateStore = (storeData, scope) => {
    let  store = {
        data: storeData,
        scope: scope
    }
    return store
}

export default createStore;

