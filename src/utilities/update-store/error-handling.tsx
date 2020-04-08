/*
    error handling for updateStore function
*/

import {IErrorHandling} from './interfaces';

const errorHandling: IErrorHandling = (action, value, dispatch, options) => {
    
    try{

        //action parameter type
        if(typeof action !== 'string'){
            throw new TypeError(`updateStore parameter action must be a string.`);
        }

        //dispatch parameter type
        if(typeof dispatch !== 'function'){
            throw new TypeError(`updateStore parameter dispatch must be a function. The dispatch parameter might have been left out of the updateStore function`);
        }

        //options
        let optionsList = ['enableMiddleware']
        if(options){
            if(typeof options !== 'object'){
                throw new TypeError(`updateStore parameter options must be an object`);
            }

            //makes sure props are legitimate
            Object.keys(options).forEach((key) => {
                if (optionsList.includes(key) !== true) {
                    throw new Error(`updateStore options property ${key} is not a valid property.`);
                }
            });

            //check options property types
            if(typeof options.enableMiddleware !== 'boolean'){
                throw new TypeError(`updateStore parameter options.enableMiddleware must be a boolean`);
            }

        }

    }catch(error){
        throw error
    }
}

export default errorHandling;