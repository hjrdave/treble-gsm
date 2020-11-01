import {TrebleGSM} from '../../interfaces';
interface IReset{
    (
        dispatch: (payload: TrebleGSM.DispatchPayload) => void,
        action: string,
        options?: {
            disableMiddleware?: boolean
        }
        
    ): void
}

const reset: IReset = (dispatch, action, options) => {

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