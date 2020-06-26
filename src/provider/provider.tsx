/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, {useReducer} from 'react';
import subscribeAPI from '../subscribe';

const Provider = ({reducer, data, children, scope}: any) => {

    const Context = scope;
    let trebleStore = useReducer(reducer, data);
    let store = trebleStore[0];
    let dispatch = trebleStore[1];

    return(
        <>
            <Context.Provider value={[store, dispatch, subscribeAPI(dispatch)]}>
                {children}
            </Context.Provider>
        </>
    )
    };

export default Provider;