interface IAppend{
    (
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean,
            limit?: number
        },
        dispatch?: any
    ): void
}
const append:IAppend = (action, dispatchValue, options, dispatch) => {
    dispatch({
        type: action,
        [action]: dispatchValue,
        subscribeType: 'append',
        options: {
            limit: options?.limit,
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default append;