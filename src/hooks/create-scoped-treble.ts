/*
    Scoped Treble Hook
    Gives scoped treble components access to store.
*/

import { createContext } from 'react';

const createScopedTreble = () => createContext([]);

export default createScopedTreble;