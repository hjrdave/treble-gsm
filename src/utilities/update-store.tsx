/*
    updateStore
    Utitlity function that updates app store.
*/

interface IUpdateStore {
    (
        action: string,
        value: any,
        dispatch: (
            object: {
                type: string,
                [action: string]: any
            }
            ) => object
    ): void
}

const updateStore: IUpdateStore = (action, value, dispatch) => {
    
    dispatch({
        type: action,
        [action]: value
    });

    //if history state is updating the subscribeID will not update
    if(action !== 'updateHistory'){
        
        dispatch({
            type: 'updateSubscribeID',
            updateSubscribeID: 0
        });
        
    }

}

export default updateStore;