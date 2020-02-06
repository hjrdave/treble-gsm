

const updateStore = (action, value, dispatch) => {
    

    dispatch({
        type: action,
        [action]: value
    });

    if(action !== 'updateHistory' && action !== 'updateHistoryID'){
        
        dispatch({
            type: 'updateSubscribeID',
            updateSubscribeID: 0
        });

        dispatch({
            type: 'updateStoreID',
            updateStoreID: 0
        });
    }

}

export default updateStore;