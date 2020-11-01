/*
    Reducer Actions
    - These are actions specified by modules
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

    const processedDispatchValue = reducerActions[dispatchPayload.subscribeType]();

    if(processedDispatchValue){
        return processedDispatchValue;
    }
    
    return dispatchValue
}

export default runReducerActions;