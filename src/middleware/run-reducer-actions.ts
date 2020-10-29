/*
    Reducer Actions
    - These are actions specified by modules
*/
import {IMiddlewareData, IModuleData} from '../interfaces';

interface IRunReducerActions{
    (
        middlewareData: IMiddlewareData
    ): any
}

const runReducerActions: IRunReducerActions = (middlewareData) => {

    const { dispatchValue, storeModules } = middlewareData;

    //map storeModules
    //should map an object literal for speed

    return dispatchValue
}

export default runReducerActions;