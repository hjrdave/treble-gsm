/*
    Treble ProviderContainer
    Provider component that wraps around components that will consume global state.
*/

import React, { useMemo } from 'react';
import Provider from './provider';
import buildState from './state';
import buildReducer from './reducer';
import Context from './context';
import { Persist } from './features';
import {ITreble} from './interfaces';

function Treble({ children, store }: ITreble) {
    
    try{
        if(typeof store !== 'object'){
            throw new TypeError('TrebleGSM: Treble store prop must be an array.');
        }
    }catch(error){
        throw error;
    }

    const
        //passed treble store
        trebleStore = useMemo(() => store.data, [store.data]),

        // builds state from treble store
        State = buildState(trebleStore),

        // builds reducer from treble store
        Reducer = buildReducer(trebleStore),

        // default context for non scoped Treble
        defaultContext = Context,

        // optional passed scoped context
        scopedContext = store?.scope;

        // TrebleGSM modules for extending 
        //modules = store?.modules; 

    return (
        <>
            <Provider data={State} reducer={Reducer} scope={(scopedContext !== undefined) ? scopedContext : defaultContext} store={trebleStore}>
                <Persist store={trebleStore} />
                {children}
            </Provider>
        </>
    )
}

export default Treble;
