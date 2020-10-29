/*
    Reducer Actions
    - These are actions specified by modules
*/
import {IMiddlewareData, IModuleData} from '../interfaces';

interface IRunReducerActions{
    (
        dispatchValue: any,
        middlewareData: IMiddlewareData,
        modules: IModuleData[]
    ): any
}

const runReducerActions: IRunReducerActions = (dispatchValue, middlewareData, modules) => {
    return dispatchValue
}

export default runReducerActions;