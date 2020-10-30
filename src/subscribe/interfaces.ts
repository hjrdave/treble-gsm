import {IModuleData } from '../interfaces';

export interface IDispatch{
    type: string,
    [type: string]: any,
    subscribeType?: string,
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

    dispatch: (object: IDispatch) => IDispatch
}

export interface ICreateSubscribeAPI {
    (
        dispatch: any,
        modules: IModuleData[]
    ): any
}