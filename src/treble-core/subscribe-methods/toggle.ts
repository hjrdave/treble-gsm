interface IToggle{
    (
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any,
    ): void
}
const toggle:IToggle = (action, toggleValue, options, dispatch) => {
    dispatch({
        type: action,
        [action]: (toggleValue) ? false : true,
        subscribeType: 'toggle',
        options: {
            disableMiddleware: options?.disableMiddleware
        }
    })
}

export default toggle;