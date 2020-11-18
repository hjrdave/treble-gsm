import { TrebleGSM } from '../../../interfaces';
import { trebleError } from '../../../globals';
interface IRun {
    (
        dispatch: (payload: TrebleGSM.DispatchPayload) => void,
        action: string
    ): void
}

const run: IRun = (dispatch, action) => {

    try {
        if (typeof action !== 'string') {
            throw TypeError('action prop must be a string');
        }
        dispatch({
            type: action,
            [action]: false,
            reducerAction: 'runSideEffect',
            options: {
                disableMiddleware: false,
                renderGuard: false
            }
        })
    } catch (error) {
        console.error(`${trebleError} ${error}`);
    }
}

export default run;