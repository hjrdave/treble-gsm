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
            limit?: number,
            remove?: boolean
        }
    ):any
}

const listManagement: IListManagement = (dispatchValue, storeItem, state, actionOptions) => {
    let objectProp = Object.keys(storeItem.state)[0];
    let limit = actionOptions?.limit;
    let append = actionOptions?.append;
    let remove = actionOptions?.remove;

    //append state to list array
    if(append){
        //check list limit and remove items from top of list
        let appendedStateArray = [...state[objectProp], dispatchValue]
        if(limit){
            //when a new element is appended the first element will be removed to keep within the specified limit
            if(appendedStateArray.length > limit){
                let overLimitAmount = appendedStateArray.length - limit;
                return appendedStateArray.splice(overLimitAmount, appendedStateArray.length);
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
    return dispatchValue;
}
export default listManagement;