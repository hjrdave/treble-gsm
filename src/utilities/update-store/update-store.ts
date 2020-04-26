/*
    updateStore
    Utitlity function that updates app store.
*/

import {IUpdateStore} from './interfaces';
import errorHandling from './error-handling';

const updateStore: IUpdateStore = (action, value, dispatch, options) => {
    
    errorHandling(action, value, dispatch, options);

    //does value conversions based on options
    const handleValue = (value: any) => {

        //if toggle is enabled will return the opposite of current boolean
        if(options?.toggle){
            return (value) ? false : true;
        }
        return value;
        
    }

    if(!(options?.hold)){
        dispatch({
            type: action,
            [action]: handleValue(value),
            options: options || false
        });
    }
    
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