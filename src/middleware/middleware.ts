/*
    Middleware
    Note: Middleware function runs before state gets to Reducer.
*/
import listManagement from './list-management';
import staticKeys from './static-keys';
import {IMiddleware} from '../interfaces';

const middleware: IMiddleware = (dispatchValue, storeItem, state, action) => {
    //store features middleware
    let call = storeItem?.features?.call || null;
    let check = storeItem?.features?.check || null;
    let process = storeItem?.features?.process || null;
    let callback = storeItem?.features?.callback || null;
    let keys = storeItem?.features?.keys || null;

    //subscribeAPI type
    let subscribeType = action?.subscribeType;

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
        if (['prepend', 'remove', 'orderBy', 'append', 'edit', 'removeBatch'].includes(subscribeType)) {
            //allows process to be ran on dispatchValue before outputed to list
            if (process !== null) {
                let processedState = process(listManagement(dispatchValue, storeItem, state, action));
                return processedState;
            }
            return listManagement(dispatchValue, storeItem, state, action);
        }

        //returns a processed dispatchValue
        if (process !== null) {
            let processedState = process(dispatchValue);

            //runs callback if it exists with processedValue
            if (callback !== null) {
                callback(processedState);
            }

            //if feature.keys are set to true returns state with keys
            if(keys){
                let stateWithKeys = staticKeys(processedState);
                return stateWithKeys;
            }

            return processedState;
        }

        //runs callback
        if (callback !== null) {
            callback(dispatchValue);
        }

        //gives static keys to objects in list if keys feature is set to true
        if(keys){
            let stateWithKeys = staticKeys(dispatchValue);
            return stateWithKeys;
        }

        return dispatchValue
    }

    return null
}

export default middleware;