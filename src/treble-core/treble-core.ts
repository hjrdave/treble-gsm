/*
    Core Treble GSM Module
    - Core Middleware and SubscribeAPI methods
*/

import createModule from '../create-module/create-module';
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
    },
    middleware:{
        call: () => console.log('foo worked!!'),
        check: (data: any) => {
        if(Array.isArray(data.dispatchValue)){
            if (data.dispatchValue?.find((item: any) => item.title === 'Billy Fo')) {
                return true
            }
            return false
        }
        return true
        },
        process: (data: any) => {
            return `${data.processedValue} FooMoo`
        }
    }
});

export default TrebleCore

