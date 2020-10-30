/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../create-module/create-module';
import TrebleStoreCore from './extend-store';
import TrebleCoreComp from './render-comp';
import {update as updateStore, toggle as toggleStore, reset as resetStore} from './subscribe-methods';
import {update as updateReducerAction, toggle as toggleReducerAction, reset as resetReducerAction} from './reducer-actions';

const TrebleCore = createModule({
    name: 'treble-core',
    extendStore: TrebleStoreCore,
    renderComponent: TrebleCoreComp,
    subscribeAPI: {
        subscribeMethods: {
            'update': updateStore, 
            'toggle': toggleStore, 
            'reset': resetStore
        },
        reducerActions: {
            'update': updateReducerAction,
            'toggle': toggleReducerAction,
            'reset': resetReducerAction
        }
    }
});

export default TrebleCore

