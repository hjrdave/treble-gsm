/*
    Subscribe API
    New experimental api for subscribing to store.
*/

import { ICreateSubscribeAPI } from './interfaces';

const subscribeAPI: ICreateSubscribeAPI = (dispatch, store, modules) => {

    //subscribeAPI methods
    let subscribeMethods: any = {

        // pure dispatch function that can be use for extending the subsribeAPI
        dispatch: (object: any) => dispatch(object)

    };

    modules?.map((module: any) => {
        let moduleMethods = module?.subscribeAPI?.subscribeMethods;
        if(moduleMethods !== undefined){
            let methodArray = Object.entries(moduleMethods);
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