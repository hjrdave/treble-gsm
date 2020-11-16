import {TrebleGSM} from '../../interfaces';

export declare namespace TrebleCore{

    export interface Dispatchers{
        update: (action: string, dispatchValue: any, options?: TrebleGSM.DispatcherOptions) => void,
        reset: (action: string, options?: TrebleGSM.DispatcherOptions) => void,
        toggle: (action: string, dispatchValue?: any, options?: TrebleGSM.DispatcherOptions) => void,
        resetAll: (action: string, options?: TrebleGSM.DispatcherOptions) => void
    }
}