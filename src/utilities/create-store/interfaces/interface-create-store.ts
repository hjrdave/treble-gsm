/*
    interface for createStore and error-handling
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
        }[],
        options?: {
            context?: React.Context<never[]>
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
        options?: {
                context: React.Context<never[]>
            }
        } 
    }