import Treble from './treble';
import Provider from './provider';
import createStore from './create-store';
import createModule from './create-module';
import withTreble from './with-treble';
import {clearPersist} from './persist';
import {useTreble, useScopedTreble} from './hooks';
import {TUseTreble, IMiddlewareData} from './interfaces';


export {
    useTreble, 
    createStore,
    createModule, 
    useScopedTreble, 
    withTreble, 
    clearPersist, 
    Provider, 
    TUseTreble, 
    IMiddlewareData
};

export default Treble;