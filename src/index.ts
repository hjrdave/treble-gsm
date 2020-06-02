import Treble from './treble';
import Provider from './provider';
import {createStore, updateStore, clearPersist, withTreble} from './utilities';
import {useTreble, useScopedTreble} from './hooks';


export {useTreble, updateStore, createStore, useScopedTreble, withTreble, clearPersist, Provider};
export default Treble;