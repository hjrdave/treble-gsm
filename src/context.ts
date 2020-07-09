
/*
    Default Context
    Default context for Treble Container (non-scoped).
*/

import { createContext } from 'react';


const defaultValue: any[] = [];
const Context = createContext<{[key:string]:any}>(defaultValue);

export default Context;