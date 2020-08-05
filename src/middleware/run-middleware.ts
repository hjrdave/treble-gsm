/*
    Middleware
    Note: Middleware function runs before state gets to Reducer.
*/
import listManagement from './list-management';
import staticKeys from './static-keys';
import checkDispatchValue from './check-dispatch-value';
import callSideEffect from './call-side-effect';
import manageLists from './manage-lists';
import isSubscribeAPIListMethod from './is-subscribe-list-method';
import { IMiddleware } from '../interfaces';



const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action) => {

    //store features middleware
    let callMiddleware = storeItem?.features?.call || null;
    let checkMiddleware = storeItem?.features?.check || null;
    let processMiddleware = storeItem?.features?.process || null;
    let callback = storeItem?.features?.callback || null;
    let keys = storeItem?.features?.keys || null;

    //subscribeAPI type
    let subscribeType = action?.subscribeType;

    //checks state agianst criteria then returns boolean
    let doesDispatchValuePass = checkDispatchValue(dispatchValue, checkMiddleware)

    //calls a non-blocking function as soon as a value is dispatched to Store
    callSideEffect(dispatchValue, callMiddleware)

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        //list management middleware
        if (isSubscribeAPIListMethod(subscribeType)) {
            return manageLists(dispatchValue, storeItem, state, action);
        }

        //returns a processed dispatchValue

        if (processMiddleware !== null) {

            const processedState = processMiddleware(dispatchValue);

            //runs callback if it exists with processedValue
            if (callback !== null) {
                setTimeout(() => { (callback !== null) ? callback(dispatchValue) : null }, 0);
            }

            //if feature.keys are set to true returns state with keys
            if (keys) {
                let stateWithKeys = staticKeys(processedState);
                return stateWithKeys;
            }

            return processedState;
        }


        //runs a non-blocking callback function as soon as other middleware runs
        if (callback !== null) {
            setTimeout(() => { (callback !== null) ? callback(dispatchValue) : null }, 0);
        }

        //gives static keys to objects in list if keys feature is set to true
        if (keys) {
            let stateWithKeys = staticKeys(dispatchValue);
            return stateWithKeys;
        }

        return dispatchValue
    }

    return null
}

export default runMiddleware;