/*
    Calls Side Effect
    - Calls a non-blocking side effect before other middleware fire
*/

interface ICallSideEffect {
    (
        subscribeData: {
            dispatchValue: any,
        },
        callMiddleware: ((subscribeData: any) => void) | null
    ): void
}

const callSideEffect: ICallSideEffect = (subscribeData, callMiddleware) => {
    if (callMiddleware !== null && subscribeData.dispatchValue !== null) {
        setTimeout(() => {
            (callMiddleware !== null) ?
                callMiddleware(subscribeData) : null
        }, 0);
    }
}

export default callSideEffect;