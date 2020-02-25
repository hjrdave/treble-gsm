/*
    History
    Provides previous state and resets state to original store value.
*/

import {useEffect, useState} from 'react';
import {useTreble} from '../hooks';

function History(){

    const [{subscribeID}, dispatch] = useTreble();

    const state: any = useTreble()[0];

    const cleanState = (currentState: any) => {
        let cleanedState = Object.assign({}, currentState);
        delete cleanedState.subscribeID;
        delete cleanedState.history;
        return cleanedState;
    }

    const currentState = cleanState(state);

    const [originalState] = useState(currentState);
    const [prevState, setPrevState] = useState();
    
    const handlePrevState = () => {
        setPrevState(currentState);
    } 

    useEffect(() => {

        handlePrevState();

        dispatch({
            type: 'updateHistory',
            updateHistory: {
                reset: {...originalState}, 
                prev: {...prevState}
            }
        });
 
    },[subscribeID]);

    return null;
}


export default History;
