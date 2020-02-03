import React, {useEffect} from 'react';
import Provider from './provider';
import buildState from './state';
import buildReducer from './reducer';
import Context from './context';



function Treble(props){

    const store = props.store;
    const State = buildState(store);
    const Reducer = buildReducer(store);
    const defaultContext = Context;
    const scopedContext = props.scope;
    
    return(
        <>
            <Provider data={State} reducer={Reducer} scope={(scopedContext) ? scopedContext : defaultContext}>
                {props.children}
            </Provider>
        </>
    )
}


export default Treble;
