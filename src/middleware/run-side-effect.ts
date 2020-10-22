/*
    Run Side Effects
    - Runs a non-blocking side effect before other middleware fire
    - Call and Callback Store middleware features
*/

import {IMiddlewareData} from '../interfaces';

interface ICallSideEffect {
    (
        middlewareData: IMiddlewareData,
        sideEffect: ((middleware: IMiddlewareData) => void) | null,
        modules: any
    ): void
}

const runSideEffect: ICallSideEffect = (middlewareData, sideEffect, modules) => {

    const dispatchValue = middlewareData.dispatchValue;

    if(dispatchValue !== null){
        //run module side effects
        modules?.map((module: any) => {
            let moduleSideEffect = module?.middleware?.call;
            if(typeof moduleSideEffect === 'function'){
                setTimeout(() => {
                    moduleSideEffect(middlewareData);
                }, 0);
            }
        })

        //run feature side effects
        if (typeof sideEffect === 'function') {
            setTimeout(() => {
                sideEffect(middlewareData);
            }, 0);
        }
    }
}

export default runSideEffect;