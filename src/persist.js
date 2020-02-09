import React, { useEffect } from 'react';
import useTreble from './treble-hook';
import updateStore from './update-store';

function Persist(props) {

    const state = useTreble();
    const [{ }, dispatch] = useTreble();
    const store = props.store;

    const setLocalStorage = (store, state) => {
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

    const updateStateFromLocalStorage = (store, state) => {
        if (typeof (Storage) !== "undefined") {
            store.forEach((item, index) => {
                let persist = item.features?.persist;
                if (persist === true) {
                    let key = Object.keys(item.state)[0];
                    let value = localStorage.getItem(key) || state[0][key];
                    let action = item.action;
                    updateStore(action, value, dispatch);
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

