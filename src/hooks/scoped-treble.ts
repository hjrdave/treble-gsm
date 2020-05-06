/*
    Scoped Treble Hook
    Gives scoped treble components access to store.
*/

import {createContext} from 'react';

const useScopedTreble: any = () => createContext([]);

export default useScopedTreble;