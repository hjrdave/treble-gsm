/*
    Runs Middleware 
    Note: Middleware functions run before state gets to Reducer.
*/
import checkDispatchValue from './check-dispatch-value';
import runSideEffect from './run-side-effect';
import processDispatchValue from './process-dispatch-value';
import { IMiddleware, IMiddlewareData } from '../interfaces';

const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action, store, modules) => {

    //store features middleware
    const callMiddleware = storeItem?.features?.call || null;
    const checkMiddleware = storeItem?.features?.check || null;
    const processMiddleware = storeItem?.features?.process || null;
    const callbackMiddleware = storeItem?.features?.callback || null;

    //store data object for middleware (this object holds dispatch and store data that can get passed to middleware functions)
    let middlewareData: IMiddlewareData = {
        dispatchValue: dispatchValue,
        dispatchAction: {...action, dispatchTime: new Date()},
        processedValue: dispatchValue,
        action: storeItem.action,
        features: storeItem.features,
        currentState: state[Object.keys(storeItem.state)[0]],
        storeItems: store,
        storeState: state,
        subscribeAPI: state.TrebleSubscribeAPI
    }

    //checks state agianst criteria then returns boolean
    const doesDispatchValuePass = checkDispatchValue(middlewareData, checkMiddleware, modules)

    //calls a non-blocking function as soon as a value is dispatched to Store
    runSideEffect(middlewareData, callMiddleware, modules);

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        const processedDispatchValue = processDispatchValue(middlewareData, processMiddleware, modules);

        middlewareData = {
            ...middlewareData,
            processedValue: processedDispatchValue
        }

        //runs callback if it exists with processedValue
        runSideEffect(middlewareData, callbackMiddleware, modules);

        return processedDispatchValue;
    }

    return null
}

export default runMiddleware;