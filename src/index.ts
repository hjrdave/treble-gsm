import Treble from './treble';
import Provider from './provider';
import createStore from './create-store';
import createModule from './create-module';
import withTreble from './with-treble';
import {clearPersist} from './persist';
import {useTreble, useScopedTreble} from './hooks';
import {TrebleGSM} from './interfaces';

export {
    useTreble, 
    createStore,
    createModule, 
    useScopedTreble, 
    withTreble, 
    clearPersist, 
    Provider, 
    TrebleGSM
};

export default Treble;