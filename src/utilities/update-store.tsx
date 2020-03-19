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
                [action: string]: any,
                options?: {
                    enableMiddleware?: boolean
                } | false
            }
        ) => object,
        options?: {
            enableMiddleware?: boolean
        }
    ): void
}

const updateStore: IUpdateStore = (action, value, dispatch, options) => {
    
    dispatch({
        type: action,
        [action]: value,
        options: options || false
    });

    //if history state is updating the subscribeID will not update
    if(action !== 'updateHistory'){
        
        dispatch({
            type: 'updateSubscribeID',
            updateSubscribeID: 0,
            options: options || false
        });
        
    }

}

export default updateStore;