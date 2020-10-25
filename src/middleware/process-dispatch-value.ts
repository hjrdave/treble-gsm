import {IMiddlewareData} from '../interfaces';

interface IProcessDispatchValue {
    (
        middlewareData: IMiddlewareData,
        processMiddleware: ((middleware: IMiddlewareData) => any) | null,
        modules: any
    ): any
}

const processDispatchValue: IProcessDispatchValue = (middlewareData, processMiddleware, modules ) => {

    let processedMiddlewareData = middlewareData;

    //Run Modules here
    modules?.map((module: any) => {
        if(typeof module.middleware.process === 'function'){
        let newDispatchValue = module.middleware.process(processedMiddlewareData);
        processedMiddlewareData = {
            ...processedMiddlewareData,
            processedValue: newDispatchValue
        }
        }
    })

    if(typeof processMiddleware === 'function'){
        return processMiddleware(processedMiddlewareData);
    }
    return processedMiddlewareData.processedValue;
}

export default processDispatchValue;