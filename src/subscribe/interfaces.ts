import {IModuleData } from '../interfaces';

export interface IDispatch{
    type: string,
    [type: string]: any,
    subscribeType: string,
    options?: {
        disableMiddleware?: boolean
    }
}

export interface IDispatchMethod{
    (
        dispatchActions: IDispatch
    ): void
}

export interface ISubscribeAPI {

    dispatch: any
}

export interface ICreateSubscribeAPI {
    (
        dispatch: any,
        store: any,
        modules: IModuleData[]
    ): any
}