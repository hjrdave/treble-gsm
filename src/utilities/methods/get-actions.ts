/*
    Returns an array of action strings.
*/
interface IGetActions{
    (
        store?: any
    ): string[]
}

const getActions: IGetActions = (store) => {
    const actionArray = store?.map((storeItem: {action: string}) => {
        return storeItem.action
    });
   return actionArray;
   
}

export default getActions;