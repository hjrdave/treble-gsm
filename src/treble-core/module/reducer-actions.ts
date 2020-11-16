/*
    Treble Core Reducer Actions
*/
import { TrebleGSM } from '../../interfaces';

//simple dispatcher that returns dispatch value
export const updateState = (data: TrebleGSM.MiddlewareData) => data.dispatchValue;

//resets specified state to initial value
export const resetToInitialState = (data: TrebleGSM.MiddlewareData) => data.initialState;

//resets entire store to initial values
export const resetAllToInitialState = (data: TrebleGSM.MiddlewareData) => {
    data.storeItems.map((item) => {
        data.dispatchers?.reset(item.action);
    });
}

//toggles state from true to false
export const toggleState = (data: TrebleGSM.MiddlewareData) => {

    const { dispatchValue, currentState } = data;
    if (dispatchValue) {
        return (dispatchValue) ? false : true;
    }
    return (currentState) ? false : true;
}