/*
    Run Side Effects
    - Runs a non-blocking side effect before other middleware fire
    - Call and Callback Store middleware features
*/

interface ICallSideEffect {
    (
        dispatchValue: any,
        sideEffect: ((state: any) => void) | null,
        modules: any
    ): void
}

const runSideEffect: ICallSideEffect = (dispatchValue, sideEffect, modules) => {

    //fire module side effects
    modules?.map((module: any) => {
        let moduleSideEffect = module.middleware.call;
        if(moduleSideEffect !== null && dispatchValue !== null){
            setTimeout(() => {
                (moduleSideEffect !== null) ?
                    moduleSideEffect(dispatchValue) : null
            }, 0);
        }
    })

    if (sideEffect !== null && dispatchValue !== null) {
        setTimeout(() => {
            (sideEffect !== null) ?
                sideEffect(dispatchValue) : null
        }, 0);
    }
}

export default runSideEffect;