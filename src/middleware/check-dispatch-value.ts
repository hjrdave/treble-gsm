/*
    Check DispatchValue
    - Runs dispatchValue agianst a specified criteria 
    and returns true if the dispatchValue meets that criteria or false if it doesnt
*/
import {IMiddlewareData} from '../interfaces';
interface ICheckDispatchValue {
    (
         middlewareData: IMiddlewareData,
        checkMiddleware: ((state: any) => boolean) | null
    ): boolean
}

const checkDispatchValue: ICheckDispatchValue = (middlewareData, checkMiddleware) => {
    if (checkMiddleware !== null && middlewareData.dispatchValue !== null) {
        return checkMiddleware(middlewareData);
    }
    return true;
}

export default checkDispatchValue;