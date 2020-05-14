/*
   Middleware module for handling lists
*/
interface IListManagement{
    (
        dispatchValue: any,
        storeItem: {
            state: {
                [key: string]: any;
            };
        },
        state: {
            [key: string]: any,
            subscribeID: number
        },
        actionOptions?: {
            append?: boolean,
            prepend?: boolean, 
            limit?: number,
            remove?: boolean,
            orderBy?: 'asc' | 'desc'
        }
    ):any
}

const listManagement: IListManagement = (dispatchValue, storeItem, state, actionOptions) => {
    let objectProp = Object.keys(storeItem.state)[0];
    let limit = actionOptions?.limit;
    let prepend = actionOptions?.prepend;
    let append = actionOptions?.append;
    let remove = actionOptions?.remove;
    let orderBy = actionOptions?.orderBy;

    //prepend state to list array
    if(prepend){
        //check list limit and remove items from top of list
        let prependedStateArray = [dispatchValue, ...state[objectProp]];
        if(limit){
            //makes sure all but the specified limit is removed
            if(prependedStateArray.length > limit){
                return prependedStateArray.slice(0, limit);
            }
            return prependedStateArray
        }
        return prependedStateArray;
    }

    //append state to list array
    if(append){
        //check list limit and remove items from top of list
        let appendedStateArray = [...state[objectProp], dispatchValue];
        if(limit){
            //when a new element is appended the first element will be removed to keep within the specified limit
            if(appendedStateArray.length > limit){
                let overLimitAmount = appendedStateArray.length - limit;
                return appendedStateArray.slice(overLimitAmount, appendedStateArray.length);
            }
            return appendedStateArray
        }
        return appendedStateArray;
    }
    //remove item from array and return new array
    if(remove){
        let filteredStateArray = state[objectProp].filter((item: any) => { return item !== dispatchValue});
        return filteredStateArray;
    }
    //order items from array and return new array
    // - for some reason orderBy change will not trigger useEffect, need to look into this...
    if(orderBy){
        if(orderBy === 'asc'){
            //if dispatch value is null it will evaluate as a string array
            let orderedStateArray = (dispatchValue !== null) ? state[objectProp].sort(
                (a:any, b:any) => a[dispatchValue].toString().localeCompare(b[dispatchValue].toString(), undefined, {numeric: true})
                ): state[objectProp].sort((a:any, b:any) => a.toString().localeCompare(b.toString(), undefined, {numeric: true}));
            return orderedStateArray;
        }
        else if(orderBy === 'desc'){
            //if dispatch value is null it will evaluate as a string array
            let orderedStateArray = (dispatchValue !== null) ? state[objectProp].sort(
                (a:any, b:any) => b[dispatchValue].toString().localeCompare(a[dispatchValue].toString(), undefined, {numeric: true})
                ) : state[objectProp].sort((a:any, b:any) => b.toString().localeCompare(a.toString(), undefined, {numeric: true}));
            return orderedStateArray;
        }
    }
    
    return dispatchValue;
}
export default listManagement;