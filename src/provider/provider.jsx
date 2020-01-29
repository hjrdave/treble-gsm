/*App Provider*/
import React, {useReducer} from 'react';
import Context from '../context';

const Provider = ({reducer, data, children}) => (
    <Context.Provider value={useReducer(reducer, data)}>
        {children}
    </Context.Provider>
);

export default Provider;