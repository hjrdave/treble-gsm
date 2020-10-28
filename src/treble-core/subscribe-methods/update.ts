import {IDispatch} from '../../subscribe/interfaces';
interface IUpdate{
    (
        action: string,
        dispatchValue: any,
        options:{
            disableMiddleware?: boolean
        },
        dispatch: (payload: IDispatch) => IDispatch,
    ): void
}

const update: IUpdate = (action, dispatchValue, options, dispatch) => {
    dispatch({
        type: action,
        [action]: dispatchValue,
        subscribeType: 'update',
        options: {
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default update;