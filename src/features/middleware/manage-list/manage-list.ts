/*
    middleware for handling lists when updateStore list options are set
*/
interface IManageList{
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
            limit?: number
        }
    ):any
}

const manageList: IManageList = (dispatchValue, storeItem, state, actionOptions) => {
    let objectProp = Object.keys(storeItem.state)[0];
    let limit = actionOptions?.limit;
    let append = actionOptions?.append;

    //append state to list array
    if(append){
        //check list limit and remove items from top of list
        let newStateArray = [...state[objectProp], dispatchValue]
        if(limit){
            //when a new element is appended the first element will be removed to keep within the specified limit
            if(newStateArray.length > limit){
                let overLimitAmount = newStateArray.length - limit;
                return newStateArray.splice(overLimitAmount, newStateArray.length);
            }
            return newStateArray
        }
        return newStateArray;
    }
    return dispatchValue;
}
export default manageList;