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

    let trebleContext = (context !== undefined) ? context : defaultContext;

    return useContext(trebleContext);
};

export default useTreble;


