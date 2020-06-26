/*
    Subscribe API
    New experimental api for subscribing to store.
*/
import React from 'react';

const subscribeAPI = (dispatch: any) => {
    
    let update = (action: string, dispatchValue: any) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'update'
        })
    }

    let remove = (action: string, targetValue: any) => {
        dispatch({
            type: action,
            [action]: targetValue,
            subscribeType: 'remove',
            options: {
                remove: true
            }
        })
    }

    let toggle = (action: string, toggleValue: boolean) => {
        dispatch({
            type: action,
            [action]: (toggleValue) ? false : true,
            subscribeType: 'toggle'
        })
    }

    let append = (action: string, dispatchValue: any) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'append',
            options: {
                append: true
            }
        })
    }

    let prepend = (action: string, dispatchValue: any) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'prepend',
            options: {
                prepend: true
            }
        })
    }

    let sort = (action: string, targetProp: string, sortType: 'asc' | 'desc') => {
        dispatch({
            type: action,
            [action]: targetProp,
            subscribeType: 'sort',
            sortType: sortType,
            options: {
                orderBy: sortType
            }
        })
    }

    let subscribeMethods = {
        update: (action: string, dispatchValue: any) => update(action, dispatchValue),
        remove: (action: string, targetValue: any) => remove(action, targetValue),
        toggle: (action: string, toggleValue: boolean) => toggle(action, toggleValue),
        append: (action: string, dispatchValue: any) => append(action, dispatchValue),
        prepend: (action: string, dispatchValue: any) => prepend(action, dispatchValue),
        sort: (action: string, targetProp: string, sortType: 'asc' | 'desc') => sort(action, targetProp, sortType)
    };
   
    return subscribeMethods
}

export default subscribeAPI;