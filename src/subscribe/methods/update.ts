
interface IUpdate{
    (
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any,
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