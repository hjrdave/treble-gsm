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
import { IMiddleware, IMiddlewareData, IStoreState } from '../interfaces';

const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action, store) => {

    //store features middleware
    let callMiddleware = storeItem?.features?.call || null;
    let checkMiddleware = storeItem?.features?.check || null;
    let processMiddleware = storeItem?.features?.process || null;
    let callback = storeItem?.features?.callback || null;
    let keys = storeItem?.features?.keys || null;
    
    //store data object for middleware (this object holds dispatch and store data that can get passed to middleware functions)
    let middlewareData: IMiddlewareData = {
        dispatchValue: dispatchValue,
        dispatchAction: {...action, dispatchTime: new Date()},
        processedValue: null,
        action: storeItem.action,
        features: storeItem.features,
        currentState: state[Object.keys(storeItem.state)[0]],
        storeItems: store,
        storeState: state,
        subscribeAPI: state.TrebleSubscribeAPI
    }

    //subscribeAPI type
    let subscribeType = action?.subscribeType;

    //checks state agianst criteria then returns boolean
    let doesDispatchValuePass = checkDispatchValue(middlewareData, checkMiddleware)

    //calls a non-blocking function as soon as a value is dispatched to Store
    callSideEffect(middlewareData, callMiddleware)

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        //list management middleware
        if (isSubscribeAPIListMethod(subscribeType)) {
            return manageLists(middlewareData.dispatchValue, storeItem, state, action);
        }

        //returns a processed dispatchValue

        if (processMiddleware !== null) {

            const processedState = processMiddleware(middlewareData);

            //runs callback if it exists with processedValue
            if (callback !== null) {
                middlewareData = {
                    ...middlewareData,
                    processedValue: processedState
                }
                setTimeout(() => { (callback !== null) ? callback(middlewareData) : null }, 0);
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
            setTimeout(() => { (callback !== null) ? callback(middlewareData) : null }, 0);
        }

        //gives static keys to objects in list if keys feature is set to true
        if (keys) {
            let stateWithKeys = staticKeys(middlewareData.dispatchValue);
            return stateWithKeys;
        }

        return dispatchValue
    }

    return null
}

export default runMiddleware;