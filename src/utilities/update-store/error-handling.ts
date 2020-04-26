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
        let optionsList = ['enableMiddleware', 'toggle', 'hold']
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
            
            //check enableMiddleware type
            if(typeof options.enableMiddleware !== 'boolean' && options.enableMiddleware !== undefined){
                throw new TypeError(`updateStore parameter options.enableMiddleware must be a boolean`);
            }

            //check toggle type
            if(typeof options.toggle !== 'boolean' && options.toggle !== undefined){
                throw new TypeError(`updateStore parameter options.toggle must be a boolean`);
            }

            //makes sure value is a boolean if options.toggle is set to true
            if(options.toggle){
                if(typeof value !== 'boolean'){
                    throw new TypeError(`updateStore parameter value must be a boolean when options.toggle is set to true.`)
                }
            }
        }

    }catch(error){
        throw error
    }
}

export default errorHandling;