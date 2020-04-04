/*
    Treble Container
    Container component that wraps around components that will consume global state.
*/

import React, { useMemo, useEffect } from 'react';
import Provider from './provider';
import buildState from './state';
import buildReducer from './reducer';
import Context from './context';
import { History, Persist } from './features';
import trebleDebug from './treble-debug';

interface Props {
    children: JSX.Element | JSX.Element[];
    store: {
        data: {
            action: string,
            state: {
                [key: string]: any
            },
            features?: {
                persist?: boolean
            }
        }[],
        scope?: React.Context<never[]>

    }
}

function Treble({ children, store }: Props) {

    const
        trebleStore = useMemo(() => store.data, [store.data]), //passed treble store
        State = buildState(trebleStore), // builds state from treble store
        Reducer = buildReducer(trebleStore), // builds reducer from treble store
        defaultContext = Context, // default context for non scoped Treble
        scopedContext = store?.scope; // optional passed scoped context

    //runs treble debugger
    // useEffect(() => {
    //     trebleDebug(store);
    // },[store]);

    return (
        <>
            <Provider data={State} reducer={Reducer} scope={(scopedContext !== undefined) ? scopedContext : defaultContext}>
                <History />
                <Persist store={trebleStore} />
                {children}
            </Provider>
        </>
    )
}

export default Treble;
