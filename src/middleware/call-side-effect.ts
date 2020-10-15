/*
    Calls Side Effect
    - Calls a non-blocking side effect before other middleware fire
*/
import {IMiddlewareData, IStoreState} from '../interfaces';
interface ICallSideEffect {
    (
        middlewareData: IMiddlewareData,
        callMiddleware: ((middlewareData: any) => void) | null
    ): void
}

const callSideEffect: ICallSideEffect = (middlewareData, callMiddleware) => {
    if (callMiddleware !== null && middlewareData.dispatchValue !== null) {
        setTimeout(() => {
            (callMiddleware !== null) ?
                callMiddleware(middlewareData) : null
        }, 0);
    }
}

export default callSideEffect;