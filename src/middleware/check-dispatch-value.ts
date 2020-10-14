/*
    Check DispatchValue
    - Runs dispatchValue agianst a specified criteria 
    and returns true if the dispatchValue meets that criteria or false if it doesnt
*/

interface ICheckDispatchValue {
    (
         subscribeData: {
            dispatchValue: any
        },
        checkMiddleware: ((state: any) => boolean) | null
    ): boolean
}

const checkDispatchValue: ICheckDispatchValue = (subscribeData, checkMiddleware) => {
    if (checkMiddleware !== null && subscribeData.dispatchValue !== null) {
        return checkMiddleware(subscribeData);
    }
    return true;
}

export default checkDispatchValue;