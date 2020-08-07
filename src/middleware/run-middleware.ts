/*
    Runs Middleware 
    Note: Middleware functions run before state gets to Reducer.
*/
import checkDispatchValue from './check-dispatch-value';
import runSideEffect from './run-side-effect';
import manageLists from './manage-lists';
import isSubscribeAPIListMethod from './is-subscribe-list-method';
import generateStaticKeys from './generate-static-keys';
import { IMiddleware } from '../interfaces';

const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action) => {

    //store features middleware
    let callMiddleware = storeItem?.features?.call || null;
    let checkMiddleware = storeItem?.features?.check || null;
    let processMiddleware = storeItem?.features?.process || null;
    let callbackMiddleware = storeItem?.features?.callback || null;
    let staticKeysMiddleware = storeItem?.features?.keys;

    //subscribeAPI type
    let subscribeType = action?.subscribeType;

    //checks state agianst criteria then returns boolean
    let doesDispatchValuePass = checkDispatchValue(dispatchValue, checkMiddleware)

    //calls a non-blocking function as soon as a value is dispatched to Store
    runSideEffect(dispatchValue, callMiddleware);

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        //list management middleware
        if (isSubscribeAPIListMethod(subscribeType)) {
            return manageLists(dispatchValue, storeItem, state, action);
        }

        //returns a processed dispatchValue
        if (processMiddleware !== null) {

            const processedDispatchValue = processMiddleware(dispatchValue);

            //runs callback if it exists with processedValue
            runSideEffect(processedDispatchValue, callbackMiddleware);

            //if feature.keys are set to true returns state with key
            generateStaticKeys(processedDispatchValue, staticKeysMiddleware);

            return processedDispatchValue;
        }

        //runs a non-blocking callback function as soon as other middleware runs
        runSideEffect(dispatchValue, callbackMiddleware);

        //gives static keys to objects in list if keys feature is set to true
        generateStaticKeys(dispatchValue, staticKeysMiddleware);

        return dispatchValue
    }

    return null
}

export default runMiddleware;