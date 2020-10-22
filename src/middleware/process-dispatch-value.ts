import {IMiddlewareData} from '../interfaces';

interface IProcessDispatchValue {
    (
        middlewareData: IMiddlewareData,
        processMiddleware: ((middleware: IMiddlewareData) => any) | null,
        modules: any
    ): any
}

const processDispatchValue: IProcessDispatchValue = (middlewareData, processMiddleware, modules ) => {

    const dispatchValue = middlewareData.dispatchValue;

    //Run Modules here

    if(typeof processMiddleware === 'function'){
        return processMiddleware(middlewareData);
    }
    return dispatchValue
}

export default processDispatchValue;