import {useEffect, useState} from 'react';
import useTreble from './treble-hook';



function History(){

    const [{subscribeID, historyID, storeID, history}, dispatch] = useTreble();

    const state = useTreble()[0];

    const cleanState = (currentState) => {
        let cleanedState = Object.assign({}, currentState);
        delete cleanedState.subscribeID;
        delete cleanedState.history;
        delete cleanedState.historyID;
        delete cleanedState.storeID;
        return cleanedState;
    }

    const currentState = cleanState(state);

    const [originalState, setOriginalState] = useState(currentState);
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

    useEffect(() => {

        if(storeID > 1){
            dispatch({
                type: 'updateHistoryID',
                updateHistoryID: historyID + 1
            });
        }

    },[history]);

    return null;
}


export default History;
