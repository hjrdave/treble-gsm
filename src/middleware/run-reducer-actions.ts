/*
    Reducer Actions
    - These are actions specified by modules
*/
import {IMiddlewareData, IModuleData} from '../interfaces';
import processDispatchValue from './process-dispatch-value';

interface IRunReducerActions{
    (
        middlewareData: IMiddlewareData
    ): any
}

const runReducerActions: IRunReducerActions = (middlewareData) => {

    const { dispatchValue, storeModules: modules, dispatchAction } = middlewareData;

    let reducerActions: {[key:string]: any} = {}

    //Run module reducer actions
    modules?.map((module) => {
        const dispatchMethods = module.subscribeAPI?.reducerActions;
        if(dispatchMethods){
            const dispatchMethodsArray = Object.entries(dispatchMethods);
            dispatchMethodsArray?.map((dispatchMethod) => {
                reducerActions = {
                    ...reducerActions,
                    [dispatchMethod[0]]: () => dispatchMethod[1](middlewareData)
                }
            });
        }
    })

    const processedDispatchValue = reducerActions[dispatchAction.subscribeType]();

    if(processedDispatchValue){
        return processedDispatchValue;
    }
    
    return dispatchValue
}

export default runReducerActions;