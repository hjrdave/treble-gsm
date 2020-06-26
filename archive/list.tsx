/*
    Persist
    Feature that puts state in local storage for state persistence. 
*/

import { useEffect } from 'react';
import {useTreble} from '../src/hooks';
import {updateStore} from '../src/utilities';

interface Props {
    trebleStore: {
        action: string;
        state: {
            [key: string]: any;
        };
        features?: {
            list?: boolean | undefined;
        } | undefined;
    }[]
}

function List({trebleStore}: Props) {
    const [{trebleList, subscribeID, list, listTest2}, dispatch] = useTreble();
    const store = useTreble()[0];

    const storeListItems = trebleStore.filter((item) => {
        if(item?.features?.list === true){
            return item;
        }
    }).map((item) => {
        return Object.keys(item.state).toString()
    })

    useEffect(() => {
        let liveStoreKeys = Object.keys(store);
        let dispatchValue: any = {}
        liveStoreKeys?.forEach((key) => {
            if(trebleList[key] !== undefined){  
                dispatchValue[key] = {raw: store[key], query: ''};
            }
        })
        updateStore('updateTrebleList', dispatchValue, dispatch);
    },[list]);

    //used to fire useEffect when list state changes
    const foo = storeListItems.map((key) => {
        return store[key]
    })

    // useEffect(() => {
    //     console.log(foo);
    //     console.log('fire foo')
    // },[foo])


    return null
}
export default List;

