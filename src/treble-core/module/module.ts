/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../../create-module/create-module';
import TrebleCoreStore from './extend-store';
import TrebleCoreComp from './render-comp';
import renderGuard from './middleware/render-guard';
import { update as updateStore, run as runStoreSideEffect, toggle as toggleStore, reset as resetStore, resetAll as resetAllStore } from './dispatchers';
import { updateState, toggleState, resetToInitialState, resetAllToInitialState, runSideEffect } from './reducer-actions';

const TrebleCore = createModule({
    name: 'treble-core',
    extendStore: TrebleCoreStore,
    renderComponent: TrebleCoreComp,
    middleware: {
        check: renderGuard
    },
    dispatchers: {
        'update': updateStore,
        'run': runStoreSideEffect,
        'toggle': toggleStore,
        'reset': resetStore,
        'resetAll': resetAllStore
    },
    reducerActions: {
        'updateState': updateState,
        'toggleState': toggleState,
        'runSideEffect': runSideEffect,
        'resetToInitialState': resetToInitialState,
        'resetAllToInitialState': resetAllToInitialState
    }

});

export default TrebleCore

