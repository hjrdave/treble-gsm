import { TrebleGSM } from '../../../interfaces';
import { trebleError } from '../../../globals';
interface IResetAll {
    (
        dispatch: (payload: TrebleGSM.DispatchPayload) => void,
        action: string,
        options?: {
            disableMiddleware?: boolean,
            sideEffectOnly: boolean
        }

    ): void
}

const resetAll: IResetAll = (dispatch) => {

    try {
        dispatch({
            type: 'runTrebleCoreMiddleware',
            ['runTrebleCoreMiddleware']: true,
            reducerAction: 'updateState',
            options: {
                disableMiddleware: false
            }
        })
    } catch (error) {
        console.error(`${trebleError} ${error}`);
    }
}

export default resetAll;