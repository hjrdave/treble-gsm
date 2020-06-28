/*
    Subscribe API
    New experimental api for subscribing to store.
*/
import React from 'react';

const subscribeAPI = (dispatch: any) => {

    let update = (action: string, dispatchValue: any, options?: { disableMiddleware?: boolean }) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'update',
            options: {
                disableMiddleware: (options?.disableMiddleware === true) ? true : false
            }
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

    let append = (action: string, dispatchValue: any, options?: { limit?: number}) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'append',
            options: {
                append: true,
                limit: (options?.limit) ? options?.limit : false
            }
        })
    }

    let prepend = (action: string, dispatchValue: any, options?: { limit?: number}) => {
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'prepend',
            options: {
                prepend: true,
                limit: (options?.limit) ? options?.limit : false
            }
        })
    }

    let orderBy = (action: string, targetProp: string, orderType: 'asc' | 'desc') => {
        dispatch({
            type: action,
            [action]: targetProp,
            subscribeType: 'orderBy',
            orderType: orderType,
            options: {
                orderBy: orderType
            }
        })
    }

    let subscribeMethods = {
        update: (action: string, dispatchValue: any, options: any) => update(action, dispatchValue, options),
        remove: (action: string, targetValue: any) => remove(action, targetValue),
        toggle: (action: string, toggleValue: boolean) => toggle(action, toggleValue),
        append: (action: string, dispatchValue: any, options: any) => append(action, dispatchValue, options),
        prepend: (action: string, dispatchValue: any, options: any) => prepend(action, dispatchValue, options),
        orderBy: (action: string, targetProp: string, sortType: 'asc' | 'desc') => orderBy(action, targetProp, sortType)
    };

    return subscribeMethods
}

export default subscribeAPI;