interface IOrderBy{
    (
        action: string,
        targetProp: string,
        orderType: 'asc' | 'desc',
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any
    ): void
}
const orderBy: IOrderBy = (action, targetProp, orderType, options, dispatch) => {
    dispatch({
        type: action,
        [action]: targetProp,
        subscribeType: 'orderBy',
        orderType: orderType,
        options: {
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default orderBy;