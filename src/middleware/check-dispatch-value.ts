/*
    Check Dispatch Value
    - Runs dispatch value agianst a specified criteria 
    and returns true if the dispatch value meets that criteria or false if it doesnt
*/
import {IMiddlewareData, IModuleData} from '../interfaces';

interface ICheckDispatchValue {
    (
        middlewareData: IMiddlewareData
    ): boolean
}

const checkDispatchValue: ICheckDispatchValue = (middlewareData) => {

    const {dispatchValue, storeModules: modules, features} = middlewareData;
    const checkMiddleware = features?.check;

    if(dispatchValue !== null){

        //run module checks
        const doesModuleMiddlewarePass = modules.filter((module) => {
            const moduleCheckMiddleware = module?.middleware?.check;
            if(typeof moduleCheckMiddleware === 'function'){
                return moduleCheckMiddleware
            }
        }).map((module) => module?.middleware?.check(middlewareData)).includes(!(false));
        
        //if a module check fails return false
        if(!doesModuleMiddlewarePass){
            return false;
        }

        //run store feature check
        if (typeof checkMiddleware === 'function') {
            const doesFeatureCheckPass = checkMiddleware(middlewareData);
            if(doesFeatureCheckPass === true){
                return true
            }
            return false
        }
    }

    return true;
}

export default checkDispatchValue;