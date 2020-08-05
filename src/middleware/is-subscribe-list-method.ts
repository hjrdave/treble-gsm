/*
    Is Subscribe List Method
    -Checks to see if subscribeType is a SubscribeAPI list method.
*/

interface IIsSubscribeAPIListMethod {
    (
        subscribeType: string | undefined
    ): boolean
}

const isSubscribeAPIListMethod: IIsSubscribeAPIListMethod = (subscribeType) => {
    let methodTypes = [
        'prepend',
        'remove',
        'orderBy',
        'append',
        'edit',
        'removeBatch'
    ]
    if (subscribeType) {
        if (methodTypes.includes(subscribeType)) {
            return true;
        }
        return false;
    }
    return false;
}

export default isSubscribeAPIListMethod;