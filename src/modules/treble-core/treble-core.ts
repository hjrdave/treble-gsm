/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../create-module';
import TrebleStoreCore from './extend-store';
import TrebleCoreComp from './render-comp';
import {update, toggle, reset} from './subscribe-methods';

const TrebleCore: any = createModule({
    name: 'treble-core',
    extendStore: TrebleStoreCore,
    renderComponent: TrebleCoreComp as any,
    subscribeAPI: {
        subscribeMethods: {
            'update': update, 
            'toggle': toggle, 
            'reset': reset
        },
        reducerActions: []
    }
});

export default TrebleCore

