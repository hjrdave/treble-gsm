/*
    Treble Core Reducer Actions
*/
import {TrebleGSM} from '../interfaces';

//simple dispatcher that returns dispatch value
export const update = (middlewareData: TrebleGSM.MiddlewareData) => middlewareData.dispatchValue;

//resets specified state to initial value
export const reset = (middlewareData: TrebleGSM.MiddlewareData) => middlewareData.initialState;

//toggles state from true to false
export const toggle = (middlewareData: TrebleGSM.MiddlewareData) => {

    const { dispatchValue, currentState } = middlewareData;
    if(dispatchValue){
        return (dispatchValue) ? false : true;
    }
    return (currentState) ? false : true;
}