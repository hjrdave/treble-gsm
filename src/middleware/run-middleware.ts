/*
    Runs Middleware 
    Note: Middleware functions run before state gets to Reducer.
*/
import checkDispatchValue from './check-dispatch-value';
import runSideEffect from './run-side-effect';
import processDispatchValue from './process-dispatch-value';
import { IMiddleware } from '../interfaces';
import createMiddlewareData from './create-middleware-data';

const runMiddleware: IMiddleware = (dispatchValue, storeItem, state, action, store, modules) => {

    //create middleware data object
    let middlewareData = createMiddlewareData(dispatchValue, action, storeItem, state, store, modules);
   
    //checks state agianst criteria then returns boolean
    const doesDispatchValuePass = checkDispatchValue(middlewareData);

    //calls a non-blocking function as soon as a value is dispatched to Store
    runSideEffect(middlewareData, 'call');

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if (doesDispatchValuePass) {

        //passes dispatchValue through module and feature process middleware
        const processedDispatchValue = processDispatchValue(middlewareData);

        middlewareData = {
            ...middlewareData,
            dispatchValue: processedDispatchValue
        }

        //runs callback if it exists with processedValue
        runSideEffect(middlewareData, 'callback');

        return processedDispatchValue;
    }

    return null
}

export default runMiddleware;