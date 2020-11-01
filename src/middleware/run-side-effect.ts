/*
    Run Side Effects
    - Runs a non-blocking side effect before other middleware fire
    - Call and Callback Store middleware features
*/

import {TrebleGSM} from '../interfaces';

interface ICallSideEffect {
    (
        middlewareData: TrebleGSM.MiddlewareData,
        type: 'call' | 'callback'
    ): void
}

const runSideEffect: ICallSideEffect = (middlewareData, type) => {

    const dispatchValue = middlewareData.dispatchValue;
    const { storeModules: modules } = middlewareData;
    const sideEffect = (type === 'call') ? middlewareData?.features?.call : 
    (type === 'callback') ? middlewareData?.features?.callback : null;

    if(dispatchValue !== null){
        //run module side effects
        modules?.map((module) => {

            const moduleSideEffect = (type === 'call') ? 
            module?.middleware?.call : (type === 'callback') 
            ? module?.middleware?.callback : null;

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