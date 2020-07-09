/*
    Subscribe API
    New experimental api for subscribing to store.
*/

import {ICreateSubscribeAPI, ISubscribeAPI} from './interfaces';
import {update, remove, toggle, append, prepend, orderBy, reset, getActions, edit, getStateKeys, removeBatch} from './methods';

const subscribeAPI: ICreateSubscribeAPI = (dispatch, store) => {
    
    //subscribeAPI methods
    let subscribeMethods: ISubscribeAPI = {

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

        //allows for a Store list item to be edited and then resaved to the Store with the rest intact. Features.keys must be set to true.
        edit: (action, targetValue, options) => edit(action, targetValue, options, dispatch),

        //resets the Store item to its initial value
        reset: (action) => reset(action, dispatch, store),

        //removes a group of list items at one time
        removeBatch: (action, targetBatch, options) => removeBatch(action, targetBatch, options, dispatch),

        //returns and array of store actions
        getActions: () => getActions(store),

        //returns and array of store state keys
        getStateKeys: () => getStateKeys(store),

        //pure dispatch function that can be use for extending the subsribeAPI
        dispatch: (object: any) => dispatch(object)
    };

    return subscribeMethods
}

export default subscribeAPI;