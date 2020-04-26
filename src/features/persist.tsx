/*
    Persist
    Feature that puts state in local storage for state persistence. 
*/

import { useEffect } from 'react';
import {useTreble} from '../hooks';
import {updateStore} from '../utilities';

interface Props {
    store: {
        action: string;
        state: {
            [key: string]: any;
        };
        features?: {
            persist?: boolean | undefined;
        } | undefined;
    }[]
}

function Persist({store}: Props) {

    const state = useTreble();
    const [{ }, dispatch] = useTreble();

    //set to local storage
    interface ISetLocalStorage {
        (
            store:  {
                action: string;
                state: {
                    [key: string]: any;
                };
                features?: {
                    persist?: boolean | undefined;
                } | undefined;
            }[],
            state: {
                [key: string]: any
            }
        ): any
    }
    const setLocalStorage: ISetLocalStorage = (store, state) => {
        if (typeof (Storage) !== "undefined") {
            store.forEach((item) => {
                let persist = item.features?.persist;
                let key = Object.keys(item.state)[0];
                if (persist === true) {

                    //checks if the value is an object then stringify for storage
                    let handleValue = (value: any) => {
                        if(typeof value === 'object'){
                            return JSON.stringify(value);
                        }
                        return value
                    }

                    let value = state[0][key];
                    localStorage.setItem(key, handleValue(value));
                }
                else {
                    localStorage.removeItem(key);
                }
            })
        }
    }

    //update state based on local storage
    interface IUpdateStateFromLocalStorage {
        (
            store: {
                action: string;
                state: {
                    [key: string]: any;
                };
                features?: {
                    persist?: boolean | undefined;
                } | undefined;
            }[],
            state: any
        ): void
    }
    const updateStateFromLocalStorage: IUpdateStateFromLocalStorage = (store, state) => {
        if (typeof (Storage) !== "undefined") {
            store.forEach((item) => {
                let persist = item.features?.persist;

                //Checks if features.persist is set to true
                if (persist === true) {
                    let key = Object.keys(item.state)[0];
                    let value = localStorage.getItem(key) || state[0][key];
                    let action = item.action;
                    
                    //does some type checking and conversions because of weird local storage quirks
                    let handleValue = (value: any) => {

                        //makes sure boolean values are not returned as strings
                        //This might cause issues down the road.  If it becomes an issue, will seek alternative
                        if(value === 'true' || value === 'false'){
                            return (value === 'true') ? true : (value === 'false') ? false : value
                        }

                        //checks to see if the localstorage string is a valid json string
                        let isJsonString = (value: any) => {
                            try{
                                JSON.parse(value)
                            } catch (e){
                                return false
                            }
                            return true
                        }
                        //if string is valid it parses back to object
                        if(isJsonString(value)){
                            return JSON.parse(value);
                        }
                        return value
                    }
                    //updateStore false parameter disables middleware pipeline
                    updateStore(action, handleValue(value), dispatch, {
                        enableMiddleware: false
                    });
                }
            })
        }
    }

    useEffect(() => {
       updateStateFromLocalStorage(store, state);
    }, [dispatch])

    useEffect(() => {
        setLocalStorage(store, state);
    }, [state]);

    return null;
}
export default Persist;

