/*
    Calls Side Effect
    - Calls a non-blocking side effect before other middleware fire
*/

interface ICallSideEffect {
    (
        dispatchValue: any,
        callMiddleware: ((state: any) => void) | null
    ): void
}

const callSideEffect: ICallSideEffect = (dispatchValue, callMiddleware) => {
    if (callMiddleware !== null && dispatchValue !== null) {
        setTimeout(() => {
            (callMiddleware !== null) ?
                callMiddleware(dispatchValue) : null
        }, 0);
    }
}

export default callSideEffect;