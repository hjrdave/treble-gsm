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
                persist?: boolean,
                call?: (state: any) => void,
                check?: (state: any) => boolean,
                convert?: (state: any) => any
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
                persist?: boolean,
                call?: (state: any) => void,
                check?: (state: any) => boolean,
                convert?: (state: any) => any
            }
        }[],
        options?: {
                context: React.Context<never[]>
            }
        } 
    }