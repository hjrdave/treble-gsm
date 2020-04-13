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
                    let value = state[0][key];
                    localStorage.setItem(key, value);
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
                    
                    //makes sure boolean values are not returned as strings
                    //This might cause issues down the road.  If it becomes an issue, will seek alternative
                    let handleBooleanValue = (value: any) => {
                        return (value === 'true') ? true : (value === 'false') ? false : value
                    }
                    //updateStore false parameter disables middleware pipeline
                    updateStore(action, handleBooleanValue(value), dispatch, {
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

