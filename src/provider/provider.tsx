/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, {useReducer} from 'react';

const Provider = ({reducer, data, children, scope}: any) => {

    const Context = scope;

    return(
        <>
            <Context.Provider value={useReducer(reducer, data)}>
                {children}
            </Context.Provider>
        </>
    )
    };

export default Provider;