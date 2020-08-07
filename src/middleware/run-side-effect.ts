/*
    Run Side Effects
    - Runs a non-blocking side effect before other middleware fire
    - Call and Callback Store middleware features
*/

interface ICallSideEffect {
    (
        dispatchValue: any,
        sideEffect: ((state: any) => void) | null
    ): void
}

const runSideEffect: ICallSideEffect = (dispatchValue, sideEffect) => {
    if (sideEffect !== null && dispatchValue !== null) {
        setTimeout(() => {
            (sideEffect !== null) ?
                sideEffect(dispatchValue) : null
        }, 0);
    }
}

export default runSideEffect;