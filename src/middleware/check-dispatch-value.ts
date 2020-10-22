/*
    Check Dispatch Value
    - Runs dispatch value agianst a specified criteria 
    and returns true if the dispatch value meets that criteria or false if it doesnt
*/
import {IMiddlewareData} from '../interfaces';

interface ICheckDispatchValue {
    (
        middlewareData: IMiddlewareData,
        checkMiddleware: ((middlewareData: IMiddlewareData) => boolean) | null,
        modules: any
    ): boolean
}

const checkDispatchValue: ICheckDispatchValue = (middlewareData, checkMiddleware, modules) => {

    const dispatchValue = middlewareData.dispatchValue;

    if(dispatchValue !== null){

        //run module checks
        const doesModuleMiddlewarePass = modules.filter((module: any) => {
            let moduleCheckMiddleware = module.middleware.check;
            if(typeof moduleCheckMiddleware === 'function'){
                return moduleCheckMiddleware
            }
        }).map((module: any) => module.middleware.check(middlewareData)).includes(!(false));
    
        //if a module check fails return false
        if(!doesModuleMiddlewarePass){
            return false;
        }

        //run store feature check
        if (typeof checkMiddleware === 'function') {
            let doesFeatureCheckPass = checkMiddleware(middlewareData);
            if(doesFeatureCheckPass === true){
                return true
            }
            return false
        }
    }

    return true;
}

export default checkDispatchValue;