/*
    Middleware
    Note: Middleware function runs before state gets to Reducer.
*/
import listManagement from './list-management';

interface IMiddleware {
    (
        dispatchValue: any,
        storeItem: {
            action: string,
            state: {
                [key: string]: any
            };
            features?: {
                call?: (state: any) => void,
                check?: (state: any) => boolean,
                process?: (state: any) => any,
                callback?: (state: any) => void
                persist?: boolean
            }
        },
        state: {
            [key: string]: any;
            subscribeID: number;
        },
        action: {
            options?: {
                prepend?: boolean,
                append?: boolean,
                limit?: number,
                remove?: boolean,
                orderBy?: 'asc' | 'desc'
            },
            subscribeType: 'remove' | 'orderBy' | 'append' | 'prepend',
            orderType?: 'asc' | 'desc'
        }

    ): any
}

const middleware: IMiddleware = (dispatchValue, storeItem, state, action) => {
    //store features middleware
    let call = storeItem?.features?.call || null;
    let check = storeItem?.features?.check || null;
    let process = storeItem?.features?.process || null;
    let callback = storeItem?.features?.callback || null;

    //action options middleware
    let prepend = action?.options?.prepend;
    let append = action?.options?.append;
    let remove = action?.options?.remove;
    let orderBy = action?.options?.orderBy;

    //checks state agianst criteria then returns boolean
    let doesStatePass = (dispatchValue: any) => {
        //runs dispatched state agianst check middlware if it exists
        if (check !== null && dispatchValue !== null) {
            return check(dispatchValue);
        }
        return true;
    }

    //calls a specified function before reducer updates state
    if (call !== null && dispatchValue !== null) {
        call(dispatchValue);
    }

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesStatePass(dispatchValue) === true) {

        //list management middleware
        if (prepend || append || remove || orderBy || ['prepend', 'remove', 'orderBy', 'append'].includes(action.subscribeType)) {
            //allows process to be ran on dispatchValue before outputed to list
            if (process !== null) {
                return process(listManagement(dispatchValue, storeItem, state, action));
            }
            return listManagement(dispatchValue, storeItem, state, action);
        }

        //returns a processed dispatchValue
        if (process !== null) {
            let processedValue = process(dispatchValue);
            //runs callback if it exists with processedValue
            if (callback !== null) {
                callback(processedValue);
            }
            return processedValue;
        }

        //runs callback
        if (callback !== null) {
            callback(dispatchValue);
        }

        return dispatchValue
    }

    return null
}

export default middleware;