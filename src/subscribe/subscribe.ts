/*
    Subscribe API
    New experimental api for subscribing to store.
*/

import {update, remove, toggle, append, prepend, orderBy} from './methods';

interface ISubscribeMethods{

    update: (
         action: string,
         dispatchValue: any,
         options?:{
             disableMiddleware?: boolean
         }
     ) => void,
     
     remove: (
         action: string,
         targetValue: any,
         options?:{
             disableMiddleware?: boolean
         }
     ) => void,

     toggle: (
         action: string,
         toggleValue: boolean,
         options?:{
            disableMiddleware?: boolean
         }
     ) => void,

     append: (
         action: string,
         dispatchValue: any,
         options?:{
             disableMiddleware?: boolean
         }
     ) => void,

     prepend: (
         action: string,
         dispatchValue: any,
         options?:{
            disableMiddleware?: boolean
         }
     ) => void,

     orderBy: (
         action: string,
         dispatchValue: any,
         sortType: 'asc' | 'desc',
         options?:{
             disableMiddleware?: boolean
         }
     ) => void,

     dispatch: any


 }

const subscribeAPI = (dispatch: any) => {

    
    //subscribeAPI methods
    let subscribeMethods: ISubscribeMethods = {

        //updates store value with new value
        update: (action, dispatchValue, options) => update(action, dispatchValue, options, dispatch),

        //targets a list item in Store and removes it from the list
        remove: (action, targetValue, options) => remove(action, targetValue, options, dispatch),

        //toggles a boolean Store value
        toggle: (action, toggleValue, options) => toggle(action, toggleValue, options, dispatch),

        //appends a state item to a Store list
        append: (action, dispatchValue, options) => append(action, dispatchValue, options, dispatch),

        //prepends a state item to a Store list
        prepend: (action, dispatchValue, options) => prepend(action, dispatchValue, options, dispatch),

        //orders a Store list by descending or ascending order
        orderBy: (action, targetProp, sortType, options) => orderBy(action, targetProp, sortType, options, dispatch),

        //pure dispatch function that can be use for extending the subsribeAPI
        dispatch: (object: any) => dispatch(object)
    };

    return subscribeMethods
}

export default subscribeAPI;