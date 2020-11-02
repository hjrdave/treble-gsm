/*
    Reducer Actions
    - These are reducer actions that recieve data from dispatchers for processing
*/
import {TrebleGSM} from '../interfaces';

interface IRunReducerActions{
    (
        middlewareData: TrebleGSM.MiddlewareData
    ): any
}

const runReducerActions: IRunReducerActions = (middlewareData) => {

    const { dispatchValue, storeModules: modules, dispatchPayload } = middlewareData;

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

    const processedDispatchValue = reducerActions[dispatchPayload.reducerAction]();

    if(processedDispatchValue){
        return processedDispatchValue;
    }
    
    return dispatchValue
}

export default runReducerActions;