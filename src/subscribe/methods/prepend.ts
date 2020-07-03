interface IPrepend{
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
const prepend:IPrepend = (action, dispatchValue, options, dispatch) => {
    dispatch({
        type: action,
        [action]: dispatchValue,
        subscribeType: 'prepend',
        options: {
            limit: options?.limit,
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default prepend;