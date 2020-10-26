/*
    Subscribe API
    New experimental api for subscribing to store.
*/

interface IDispatch{
    type: string,
    [type: string]: any,
    subscribeType: string,
    options?: {
        disableMiddleware?: boolean
    }
}

interface IDispatchMethod{
    (
        dispatchActions: IDispatch
    ): void
}

import { ICreateSubscribeAPI } from './interfaces';

const subscribeAPI: ICreateSubscribeAPI = (dispatch, store, modules) => {

    //subscribeAPI methods
    let subscribeMethods: any = {

        // pure dispatch function that can be use for extending the subsribeAPI
        dispatch: (object: IDispatch) => dispatch(object)

    };

    modules?.map((module: any) => {
        const moduleMethods = module?.subscribeAPI?.subscribeMethods;
        if(moduleMethods !== undefined){
            const methodArray = Object.entries(moduleMethods);
            methodArray?.map((method: any) => {
                subscribeMethods = {
                    ...subscribeMethods,
                    [method[0]]: (...params: any) => method[1](...params, params?.options, dispatch, store)
                }
            })
            
        }
    })
    
    return subscribeMethods
}

export default subscribeAPI;