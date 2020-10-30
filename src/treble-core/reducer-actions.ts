/*
    Treble Core Reducer Actions
*/
import {IMiddlewareData} from '../interfaces';

//simple dispatcher that returns dispatch value
export const update = (middlewareData: IMiddlewareData) => middlewareData.dispatchValue;

//resets specified state to initial value
export const reset = (middlewareData: IMiddlewareData) => middlewareData.initialState;

//toggles state from true to false
export const toggle = (middlewareData: IMiddlewareData) => {

    const { dispatchValue, currentState } = middlewareData;
    if(dispatchValue){
        return (dispatchValue) ? false : true;
    }
    return (currentState) ? false : true;
}