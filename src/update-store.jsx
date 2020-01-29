

const updateStore = (action, value, dispatch) => {

    dispatch({
        type: action,
        [action]: value
    });
}

export default updateStore;