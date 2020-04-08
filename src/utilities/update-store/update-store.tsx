/*
    updateStore
    Utitlity function that updates app store.
*/

import {IUpdateStore} from './interfaces';
import errorHandling from '../update-store/error-handling';

const updateStore: IUpdateStore = (action, value, dispatch, options) => {
    
    errorHandling(action, value, dispatch, options);

    dispatch({
        type: action,
        [action]: value,
        options: options || false
    });
    

    //if history state is updating the subscribeID will not update
    if(action !== 'updateHistory'){
        
        dispatch({
            type: 'updateSubscribeID',
            updateSubscribeID: 0,
            options: options || false
        });
        
    }

}

export default updateStore;