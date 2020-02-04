

const updateStore = (action, value, dispatch) => {
    
    let id = Math.floor(Math.random() * 10000);

    dispatch({
        type: action,
        [action]: value
    });

    if(action !== 'updateHistory'){
        dispatch({
            type: 'updateSubscribeID',
            updateSubscribeID: id
        })
    }
}

export default updateStore;