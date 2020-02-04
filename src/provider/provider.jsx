/*App Provider*/
import React, {useReducer, useEffect} from 'react';
//import Context from '../context';

const Provider = ({reducer, data, children, scope}) => {

    const Context = scope;

    // useEffect(() => {
    //     console.log(useReducer);
    // },[])

    return(
        <>
        <Context.Provider value={useReducer(reducer, data)}>
            {children}
        </Context.Provider>
        </>
    )
    };

export default Provider;