/*
    error handling for createStore function
*/
import {IErrorHandling} from './interfaces';

const errorHandling: IErrorHandling = (storeData) => {
     //Error handling for
    storeData.forEach((storeItem, index) => { 

    /* Check action prop */

    //Check type
    try{
        if(typeof storeItem.action !== 'string'){
            throw new TypeError(`Store[${index}].action must be a string.

        createStore([
            {
                action: ${typeof storeItem.action}^
                ...
            }
        ])
        `)};
        } catch(e){
            console.error(e);
        }

      //See if action prop exists
    });
}

export default errorHandling;