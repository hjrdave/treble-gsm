
/*
    Default Context
    Main context for Treble Container (non-scoped).
*/

import { createContext } from 'react';
import {IContext} from './interfaces';

const Context = createContext<IContext | null>(null);

export default Context;