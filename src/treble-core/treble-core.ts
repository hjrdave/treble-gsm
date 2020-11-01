/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../create-module/create-module';
import TrebleCoreStore from './extend-store';
import TrebleCoreComp from './render-comp';
import {update as updateStore, toggle as toggleStore, reset as resetStore} from './dispatchers';
import {updateState, toggleState, resetToInitialState} from './reducer-actions';

const TrebleCore = createModule({
    name: 'treble-core',
    extendStore: TrebleCoreStore,
    renderComponent: TrebleCoreComp,
    subscribeAPI: {
        dispatchers: {
            'update': updateStore, 
            'toggle': toggleStore, 
            'reset': resetStore
        },
        reducerActions: {
            'updateState': updateState,
            'toggleState': toggleState,
            'resetToInitialState': resetToInitialState
        }
    }
});

export default TrebleCore

