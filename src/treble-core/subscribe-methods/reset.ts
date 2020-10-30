import {IDispatch} from '../../subscribe/interfaces';
interface IUpdate{
    (
        action: string,
        options?: {
            disableMiddleware?: boolean
        },
        dispatch?: (payload: IDispatch) => IDispatch
        
    ): void
}

const reset: IUpdate = (action, options, dispatch) => {

    try{
        if(typeof action !== 'string'){
            throw TypeError('SubscribeAPI: parameter action must be a string');
        }
    }catch(error){
        throw error;
    }

    if(dispatch){
        dispatch({
            type: action,
            [action]: null,
            subscribeType: 'reset',
            options: {
                disableMiddleware: true,
                ...options
            }
        })
    }
}

export default reset;