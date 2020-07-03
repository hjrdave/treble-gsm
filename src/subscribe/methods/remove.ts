interface IRemove{
    (
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any,
    ): void
}
const remove:IRemove = (action, targetValue, options, dispatch ) => {
    dispatch({
        type: action,
        [action]: targetValue,
        subscribeType: 'remove',
        options: {
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default remove;