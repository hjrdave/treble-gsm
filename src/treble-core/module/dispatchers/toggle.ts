import { TrebleGSM } from '../../../interfaces';
import { trebleError } from '../../../globals';
import { reducerActionKeys } from '../reducer-actions';
interface IToggle {
    (
        dispatch: (payload: TrebleGSM.DispatchPayload) => void,
        action: string,
        dispatchValue?: boolean
    ): void
}
const toggle: IToggle = (dispatch, action, dispatchValue) => {

    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        if (dispatchValue !== undefined && typeof dispatchValue !== 'boolean') {
            throw TypeError('dispatchValue must be a boolean');
        }

        dispatch({
            type: action,
            [action]: dispatchValue,
            reducerAction: reducerActionKeys.toggle,
            options: {
                disableMiddleware: true
            }
        })

    } catch (error) {
        console.error(`${trebleError} ${error}`);
    }
}

export default toggle;