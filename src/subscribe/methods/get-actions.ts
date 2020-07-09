
interface IGetActions{
    (
        store?: any
    ): string[]
}

const getActions: IGetActions = (store) => {
    let actionArray = store?.map((storeItem: {action: string}) => {
        return storeItem.action
    });
   return actionArray;
   
}

export default getActions;