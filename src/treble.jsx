import React, {useEffect} from 'react';
import Provider from './provider';
import buildState from './state';
import buildReducer from './reducer';

function Treble(props){

    const store = props.store;
    const State = buildState(store);
    const Reducer = buildReducer(store);
    return(
        <>
            <Provider data={State} reducer={Reducer}>
                {props.children}
            </Provider>
        </>
    )
}

export default Treble;
