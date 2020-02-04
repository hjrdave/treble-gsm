
//Custom hook for accessing AppContext in components
import {useContext} from 'react';
import Context from './context';

const useTreble = (context) => {
    let scopedContext = context;
    let defaultContext = Context;
    
    return useContext((context) ? scopedContext : defaultContext);
};

export default useTreble;


