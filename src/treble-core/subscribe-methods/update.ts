import {IDispatch} from '../../subscribe/interfaces';
interface IUpdate{
    (
        dispatch: (payload: IDispatch) => IDispatch,
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean
        }
    ): void
}

const update: IUpdate = (dispatch, action, dispatchValue, options) => {
    dispatch({
        type: action,
        [action]: dispatchValue,
        subscribeType: 'update',
        options: {
            disableMiddleware: (options?.disableMiddleware) ? true : false
        }
    })
}

export default update;