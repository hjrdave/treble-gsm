/*
    Subscribe API
    New experimental api for subscribing to store.
*/
import {TrebleGSM} from '../interfaces';
import { ICreateSubscribeAPI } from './interfaces';

const subscribeAPI: ICreateSubscribeAPI = (dispatch, modules) => {

    //subscribeAPI methods
    let subscribeMethods: {[key:string]: any} = {

        // pure dispatch function that can be use for extending the subsribeAPI
        dispatch: (object: TrebleGSM.DispatchPayload) => dispatch(object)

    };
    
    //add module suscribe methods
    modules?.map((module) => {
        const moduleMethods = module?.subscribeAPI?.subscribeMethods;
        if(moduleMethods !== undefined){
            const methodArray = Object.entries(moduleMethods);
            methodArray?.map((method) => {
                subscribeMethods = {
                    ...subscribeMethods,
                    [method[0]]: (...params: any) => method[1](dispatch, ...params)
                }
            })
            
        }
    })
    
    return subscribeMethods
}

export default subscribeAPI;