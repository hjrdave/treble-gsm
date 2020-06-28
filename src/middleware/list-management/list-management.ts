/*
   Middleware module for handling lists
*/
import React from 'react';
import { useTreble } from '../../hooks'
interface IListManagement {
    (
        dispatchValue: any,
        storeItem: {
            state: {
                [key: string]: any;
            }
        },
        state: {
            [key: string]: any,
            subscribeID: number
        },
        action?: {
            options?: {
                append?: boolean,
                prepend?: boolean,
                limit?: number,
                remove?: boolean,
                orderBy?: 'asc' | 'desc' | 'reset'
            },
            orderType?: 'asc' | 'desc',
            subscribeType: 'append' | 'prepend' | 'remove' |'orderBy'
        }
    ): any
}

const listManagement: IListManagement = (dispatchValue, storeItem, state, action) => {
    let objectProp = Object.keys(storeItem.state)[0];
    let limit = action?.options?.limit;
    let prepend = action?.options?.prepend;
    let append = action?.options?.append;
    let remove = action?.options?.remove;
    let orderBy = action?.options?.orderBy;

    //prepend state to list array
    if (prepend) {
        //check list limit and remove items from top of list
        let prependedStateArray = [dispatchValue, ...state[objectProp]];
        if (limit) {
            //makes sure all but the specified limit is removed
            if (prependedStateArray.length > limit) {
                return prependedStateArray.slice(0, limit);
            }
            return prependedStateArray
        }
        return prependedStateArray;
    }

    //append state to list array
    if (append || action?.subscribeType === 'append') {
        //check list limit and remove items from top of list
        let appendedStateArray = [...state[objectProp], dispatchValue];
        if (limit) {
            //when a new element is appended the first element will be removed to keep within the specified limit
            if (appendedStateArray.length > limit) {
                let overLimitAmount = appendedStateArray.length - limit;
                return appendedStateArray.slice(overLimitAmount, appendedStateArray.length);
            }
            return appendedStateArray
        }
        return appendedStateArray;
    }
    //remove item from array and return new array
    if (remove || action?.subscribeType === 'remove') {
        let filteredStateArray = state[objectProp].filter((item: any) => { return item !== dispatchValue });
        return filteredStateArray;
    }
    //order items from array and return new array

    /****Test Code */

    /***END TEST CODE */

    // - for some reason orderBy change will not trigger useEffect, need to look into this...
    if (orderBy || action?.subscribeType === 'orderBy') {
        let currentState = [...state[objectProp]];
        if (orderBy === 'asc' || action?.orderType === 'asc') {
            //if dispatch value is null it will evaluate as a string array
            let orderedStateArray = (dispatchValue !== null) ? currentState.sort(
                (a: any, b: any) => a[dispatchValue].toString().localeCompare(b[dispatchValue].toString(), undefined, { numeric: true })
            ) : currentState.sort((a: any, b: any) => a.toString().localeCompare(b.toString(), undefined, { numeric: true }));
            return orderedStateArray;
        }
        else if (orderBy === 'desc' || action?.orderType === 'desc') {
            //if dispatch value is null it will evaluate as a string array
            let orderedStateArray = (dispatchValue !== null) ? currentState.sort(
                (a: any, b: any) => b[dispatchValue].toString().localeCompare(a[dispatchValue].toString(), undefined, { numeric: true })
            ) : currentState.sort((a: any, b: any) => b.toString().localeCompare(a.toString(), undefined, { numeric: true }));
            return orderedStateArray;
        }
    }

    return dispatchValue;
}
export default listManagement;