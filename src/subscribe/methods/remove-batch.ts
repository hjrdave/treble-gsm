/*
    Remove Batch
    SubscribeAPI method for removing a group of list items at a time.
*/

interface IRemoveBatch{
    (
        action: string,
        dispatchBatch: any[],
        options?:{
            disableMiddleware?: boolean
        },
        dispatch?: any,
    ): void
}

const removeBatch: IRemoveBatch = (action, targetBatch, options, dispatch) => {
    try{
        if(targetBatch.length === undefined){
            throw TypeError('Treble SubscribeAPI: targetBatch must be an array.')
        }

        dispatch({
            type: action,
            [action]: targetBatch,
            subscribeType: 'removeBatch',
            options: {
                disableMiddleware: options?.disableMiddleware
            }
        })
    }
    catch(Errors){
        throw Errors
    }
}

export default removeBatch;