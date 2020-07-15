import Treble from './treble';
import Provider from './provider';
import createStore from './create-store';
import withTreble from './with-treble';
import {clearPersist} from './utilities';
import {useTreble, useScopedTreble} from './hooks';


export {useTreble, createStore, useScopedTreble, withTreble, clearPersist, Provider};
export default Treble;