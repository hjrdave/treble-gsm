
interface IUpdate{
    (
        action: string,
        options?: {
            disableMiddleware?: boolean
        },
        dispatch?: any,
        store?: any,
        
    ): void
}

const reset: IUpdate = (action, options, dispatch, store) => {

    try{
        if(typeof action !== 'string'){
            throw TypeError('SubscribeAPI: parameter action must be a string');
        }
    }catch(error){
        throw error;
    }

    const resetValue = () => {
        let filteredValue = store?.filter((item: {action: string, state: {[key:string]: any}}) => {
            if(item.action === action){
                return item
            }
        });
        let initialValue = Object.values(filteredValue[0].state)[0];
        return initialValue;
    }
    dispatch({
        type: action,
        [action]: resetValue(),
        subscribeType: 'reset',
        options: {
            disableMiddleware: true
        }
    })
}

export default reset;