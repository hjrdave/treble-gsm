
/*
    Default Context
    Main context for Treble Container (non-scoped).
*/

import { createContext } from 'react';
import { ISubscribeAPI } from './subscribe/interfaces';

const DefaultContext = createContext<Partial<[any, ISubscribeAPI]> | null>(null);

export default DefaultContext;