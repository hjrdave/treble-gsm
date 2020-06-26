/*
    Treble Container
    Container component that wraps around components that will consume global state.
*/

import React, { useMemo, useEffect } from 'react';
import Provider from './provider';
import buildState from './state';
import buildReducer from './reducer';
import Context from './context';
import { Persist } from './features';

interface Props {
    children: JSX.Element | JSX.Element[];
    store: {
        data: {
            action: string,
            state: {
                [key: string]: any
            },
            features?: {
                persist?: boolean,
                call?: (state: any) => void,
                check?: (state: any) => boolean,
                process?: (state: any) => any
            }
        }[],
        scope?: React.Context<never[]>,
        modules?: any[]
    }
}

function Treble({ children, store }: Props) {
    
    try{
        if(typeof store !== 'object'){
            throw new TypeError('Treble store prop must be an array.');
        }
    }catch(error){
        throw error;
    }

    const
        trebleStore = useMemo(() => store.data, [store.data]), //passed treble store
        State = buildState(trebleStore), // builds state from treble store
        Reducer = buildReducer(trebleStore), // builds reducer from treble store
        defaultContext = Context, // default context for non scoped Treble
        scopedContext = store?.scope, // optional passed scoped context
        modules = store?.modules; // TrebleGSM modules for extending funtionality


    return (
        <>
            <Provider data={State} reducer={Reducer} scope={(scopedContext !== undefined) ? scopedContext : defaultContext}>
                <Persist store={trebleStore} />
                {children}
            </Provider>
        </>
    )
}

export default Treble;
