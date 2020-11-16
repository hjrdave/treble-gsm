/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../../create-module/create-module';
import TrebleCoreStore from './extend-store';
import TrebleCoreComp from './render-comp';
import renderGuard from './middleware/render-guard';
import { update as updateStore, toggle as toggleStore, reset as resetStore, resetAll as resetAllStore } from './dispatchers';
import { updateState, toggleState, resetToInitialState } from './reducer-actions';

const TrebleCore = createModule({
    name: 'treble-core',
    extendStore: TrebleCoreStore,
    renderComponent: TrebleCoreComp,
    middleware: {
        check: (data) => renderGuard(data)
    },
    dispatchers: {
        'update': updateStore,
        'toggle': toggleStore,
        'reset': resetStore,
        'resetAll': resetAllStore
    },
    reducerActions: {
        'updateState': updateState,
        'toggleState': toggleState,
        'resetToInitialState': resetToInitialState
    }

});

export default TrebleCore

