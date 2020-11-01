import {TrebleGSM} from '../../interfaces';
interface IToggle{
    (
        dispatch: (payload: TrebleGSM.DispatchPayload) => void,
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