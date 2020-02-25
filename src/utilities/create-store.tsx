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
        object?: {
            options?: {
                context?: React.Context<never[]>
            }
        }
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
        object?: {
            options?: {
                context: React.Context<never[]>
            }
        }
    }
}

const createStore: ICreateStore = (storeData, object) => {
    let  store = {
        data: storeData,
        scope: object?.options?.context
    }
    return store
}

export default createStore;

