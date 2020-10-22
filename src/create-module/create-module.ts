/*
    Create Module
    - Used to create 3rd party extensions
*/

interface ICreateModuleData{
    name: string,
    extendStore?: any,
    featureKeys?: any[],
    subscribeAPI?: {
        utilityMethods?: {[key: string]: any},
        subscribeMethods?: {[key: string]: any},
        reducerActions?: any[]
    },
    middleware?: {
        call?: any,
        check?: any,
        process?: any,
        callback?: any
    },
    renderComponent?: JSX.Element
}

interface ICreateModule{
    (
        moduleData: ICreateModuleData
    ): ICreateModuleData
}

const createModule: ICreateModule = (moduleData) => {

    return {
        name: moduleData.name,
        extendStore: moduleData?.extendStore,
        featureKeys: moduleData?.featureKeys,
        subscribeAPI: {
            utilityMethods: moduleData?.subscribeAPI?.utilityMethods,
            subscribeMethods: moduleData?.subscribeAPI?.subscribeMethods,
            reducerActions: moduleData?.subscribeAPI?.reducerActions
        },
        middleware: {
            call: moduleData?.middleware?.call,
            check: moduleData?.middleware?.check,
            process: moduleData?.middleware?.process,
            callback: moduleData?.middleware?.callback
        },
        renderComponent: moduleData?.renderComponent
    }
};

export default createModule;