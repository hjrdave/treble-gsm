/*
    Create Dispatchers
    - Creates dispatchers for SubscribeAPI
*/
import {TrebleGSM} from '../interfaces';

interface ICreateDispatchers {
    (
        dispatch: any,
        modules: TrebleGSM.ModuleData[]
    ): any
}

const createDispatchers: ICreateDispatchers = (dispatch, modules) => {

    //dispatcher methods
    let dispatcherMethods: {[key:string]: any} = {

        // pure dispatch method that can be use for extending the SubsribeAPI Dispatchers
        dispatch: (payload: TrebleGSM.DispatchPayload) => dispatch(payload)

    };
    
    //add module suscribe methods
    modules?.map((module) => {
        const moduleMethods = module?.subscribeAPI?.dispatchers;
        if(moduleMethods !== undefined){
            const methodArray = Object.entries(moduleMethods);
            methodArray?.map((method) => {
                dispatcherMethods = {
                    ...dispatcherMethods,
                    [method[0]]: (...params: any) => method[1](dispatch, ...params)
                }
            })
            
        }
    })
    
    return dispatcherMethods
}

export default createDispatchers;