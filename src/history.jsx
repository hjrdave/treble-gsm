import React, {useEffect, useState} from 'react';
import useTreble from './treble-hook';
import updateStore from './update-store';



function History(){

    const state = useTreble()[0];
    const dispatch = useTreble()[1];


    const cleanState = (state) => {
        let newState = state;
        delete newState.history;
        delete newState.subscribeID;
        return newState;
    }


    useEffect(() => {
        updateStore('updateHistory', cleanState(state), dispatch);
    },[state.subscribeID])

    return null;
}


export default History;
