import {IDispatch} from '../../subscribe/interfaces';
interface IUpdate{
    (
        dispatch: (payload: IDispatch) => IDispatch,
        action: string,
        options?: {
            disableMiddleware?: boolean
        }
        
    ): void
}

const reset: IUpdate = (dispatch, action, options) => {

    try{
        if(typeof action !== 'string'){
            throw TypeError('SubscribeAPI: parameter action must be a string');
        }
    }catch(error){
        throw error;
    }

    dispatch({
        type: action,
        [action]: null,
        subscribeType: 'reset',
        options: {
            disableMiddleware: false,
            ...options
        }
    })

}

export default reset;