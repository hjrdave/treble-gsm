/*
    Subscribe API
    New experimental api for subscribing to store.
*/

import { ICreateSubscribeAPI, ISubscribeAPI } from './interfaces';
import { update, toggle, reset, getActions, getStateKeys } from './methods';

const subscribeAPI: ICreateSubscribeAPI = (dispatch, store, modules) => {

    //subscribeAPI methods
    let subscribeMethods: any = {

        // //updates store value with new value
       // update: (action: any, dispatchValue: any, options: any) => update(action, dispatchValue, options, dispatch),

        // //toggles a boolean Store value
        // toggle: (action, toggleValue, options) => toggle(action, toggleValue, options, dispatch),

        // //resets the Store item to its initial value
        // reset: (action) => reset(action, dispatch, store),

        // //returns and array of store actions
        // getActions: () => getActions(store),

        // //returns and array of store state keys
        // getStateKeys: () => getStateKeys(store),

        // //pure dispatch function that can be use for extending the subsribeAPI
        // dispatch: (object: any) => dispatch(object)

    };

    modules?.map((module: any) => {
        let moduleMethods = module?.subscribeAPI?.subscribeMethods;
        if(moduleMethods !== undefined){
            //console.log(moduleMethods)
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