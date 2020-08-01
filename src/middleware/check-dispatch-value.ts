/*
    Check DispatchValue
    - Runs dispatchValue agianst a specified criteria 
    and returns true if the dispatchValue meets that criteria or false if it doesnt
*/

interface ICheckDispatchValue {
    (
        dispatchValue: any,
        checkMiddleware: ((state: any) => boolean) | null
    ): boolean
}

const checkDispatchValue: ICheckDispatchValue = (dispatchValue, checkMiddleware) => {
    if (checkMiddleware !== null && dispatchValue !== null) {
        return checkMiddleware(dispatchValue);
    }
    return true;
}

export default checkDispatchValue;