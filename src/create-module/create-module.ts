/*
    Create Module
    - Used to create 3rd party extensions
*/

import {TrebleGSM} from '../interfaces';

interface ICreateModule{
    (
        moduleData: TrebleGSM.ModuleData
    ): TrebleGSM.ModuleData
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