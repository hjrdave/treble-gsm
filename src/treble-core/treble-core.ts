/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../create-module/create-module';
import TrebleStoreCore from './extend-store';
import TrebleCoreComp from './render-comp';
import {update, toggle, reset} from './subscribe-methods';

const TrebleCore = createModule({
    name: 'treble-core',
    extendStore: TrebleStoreCore,
    renderComponent: TrebleCoreComp,
    subscribeAPI: {
        subscribeMethods: {
            'update': update, 
            'toggle': toggle, 
            'reset': reset
        }
    }
});

export default TrebleCore

