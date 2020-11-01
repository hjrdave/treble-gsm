import {TrebleGSM } from '../interfaces';

export interface IDispatchMethod{
    (
        dispatchActions: TrebleGSM.DispatchPayload
    ): void
}



export interface ICreateSubscribeAPI {
    (
        dispatch: any,
        modules: TrebleGSM.ModuleData[]
    ): any
}