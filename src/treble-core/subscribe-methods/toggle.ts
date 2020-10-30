import {IDispatch} from '../../subscribe/interfaces';
interface IToggle{
    (
        action: string,
        dispatchValue?: boolean,
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: (payload: IDispatch) => IDispatch,
    ): void
}
const toggle:IToggle = (action, dispatchValue, options, dispatch) => {

    if(dispatch){
        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'toggle',
            options: {
                disableMiddleware: options?.disableMiddleware
            }
        })
    }

}

export default toggle;