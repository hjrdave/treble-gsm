/*
    Runs Middleware 
    Note: Middleware functions run before state gets to Reducer.
*/
import checkDispatchValue from './check-dispatch-value';
import runSideEffect from './run-side-effect';
import { IMiddleware, IMiddlewareData } from '../interfaces';

const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action, store) => {

    //store features middleware
    let callMiddleware = storeItem?.features?.call || null;
    let checkMiddleware = storeItem?.features?.check || null;
    let processMiddleware = storeItem?.features?.process || null;
    let callbackMiddleware = storeItem?.features?.callback || null;

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

    //checks state agianst criteria then returns boolean
    let doesDispatchValuePass = checkDispatchValue(middlewareData, checkMiddleware)

    //calls a non-blocking function as soon as a value is dispatched to Store
    runSideEffect(middlewareData, callMiddleware);

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        //returns a processed dispatchValue
        if (processMiddleware !== null) {

            //[need to run modules here]

            const processedDispatchValue = processMiddleware(middlewareData);

            //runs callback if it exists with processedValue
            runSideEffect(processedDispatchValue, callbackMiddleware);

            return processedDispatchValue;
        }

        //[need to run modules here]
        //list management middleware
        // if (isSubscribeAPIListMethod(subscribeType)) {
        //     return runListManagement(moduleData);
        // }

        //runs a non-blocking callback function as soon as other middleware runs
        runSideEffect(middlewareData, callbackMiddleware);

        return dispatchValue
    }

    return null
}

export default runMiddleware;