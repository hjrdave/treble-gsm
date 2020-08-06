import Treble from './treble';
import Provider from './provider';
import createStore from './create-store';
import withTreble from './with-treble';
import {clearPersist} from './persist';
import {useTreble, useScopedTreble} from './hooks';
import {TUseTreble} from './interfaces';


export {useTreble, createStore, useScopedTreble, withTreble, clearPersist, Provider, TUseTreble};
export default Treble;