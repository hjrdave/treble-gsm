import {IDispatch} from '../../subscribe/interfaces';
interface IToggle{
    (
        dispatch: (payload: IDispatch) => IDispatch,
        action: string,
        dispatchValue?: boolean,
        options?:{
            disableMiddleware?: boolean
        }
    ): void
}
const toggle:IToggle = (dispatch, action, dispatchValue, options) => {

        dispatch({
            type: action,
            [action]: dispatchValue,
            subscribeType: 'toggle',
            options: {
                disableMiddleware: true
            }
        })

}

export default toggle;