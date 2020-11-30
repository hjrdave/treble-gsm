/*
    Create Module
    - Used to create 3rd party extensions
*/

import { TrebleGSM } from '../interfaces';

interface ICreateModule {
    (
        moduleData: TrebleGSM.ModuleData
    ): TrebleGSM.ModuleData
}

const createModule: ICreateModule = (moduleData) => {

    return {
        name: moduleData.name,
        extendStore: moduleData?.extendStore,
        featureKeys: moduleData?.featureKeys,
        dispatchers: moduleData?.dispatchers,
        reducerActions: moduleData?.reducerActions,
        middleware: {
            log: moduleData?.middleware?.log,
            run: moduleData?.middleware?.run,
            check: moduleData?.middleware?.check,
            process: moduleData?.middleware?.process,
            callback: moduleData?.middleware?.callback,
            payloadListener: moduleData?.middleware?.payloadListener
        },
        renderComponent: moduleData?.renderComponent,
        initOrder: moduleData?.initOrder,
        namespaceDispatchers: moduleData?.namespaceDispatchers,
        namespaceFeatureKeys: moduleData?.namespaceFeatureKeys
    }
};

export default createModule;