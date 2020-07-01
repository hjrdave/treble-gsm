interface IEdit{
    (
        action: string,
        dispatchValue: any,
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any,
    ): void
}
const edit:IEdit = (action, targetValue, options, dispatch ) => {
    try{
        if(targetValue.trebleKey === undefined){
            throw Error(`Treble SubscribeAPI: ${action}: features.keys must be set to true.`)
        }
    }catch(error){
        throw error
    }
    
    dispatch({
        type: action,
        [action]: targetValue,
        subscribeType: 'edit',
        options: {
            disableMiddleware: options?.disableMiddleware
        }
    });
}

export default edit;