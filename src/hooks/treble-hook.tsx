/*
    Treble Hook
    Gives child components that call it access to store.
*/

import {useContext} from 'react';
import defaultContext from '../context';

interface IUseTreble {
    (
        context?: React.Context<[]>
    ): any
}

const useTreble: IUseTreble = (context) => {

    try{
        if(context){
            if(typeof context !== 'object'){
                throw new TypeError('useTreble hook must only accept React.Context.')
            }
        }
    }catch(error){
        throw error
    }

    let trebleContext = (context !== undefined) ? context : defaultContext;
    return useContext(trebleContext);
};

export default useTreble;


