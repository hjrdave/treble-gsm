import Treble from './treble';
import Provider from './provider';
import createStore from './create-store';
import createModule from './create-module';
import withTreble from './with-treble';
import createScopedTreble from './hooks/create-scoped-treble';
import { useTreble, useScopedTreble } from './hooks';
import { TrebleGSM } from './interfaces';
import { reducerActionKeys } from './treble-core'

export {
    useTreble,
    createStore,
    createModule,
    useScopedTreble,
    createScopedTreble,
    withTreble,
    Provider,
    TrebleGSM,
    reducerActionKeys
};

export default Treble;