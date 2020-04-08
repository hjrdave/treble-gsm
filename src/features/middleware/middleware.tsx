/*
    Middleware
    Note: Middleware function runs before state gets to Reducer.
*/

interface IMiddleware {
    (
      store: {
        action: string;
        state: {
            [key: string]: any;
        };
        features?: {
            call?: (state: any) => void;
            check?: (state: any) => boolean
            convert?: (state: any) => any,
            persist?: boolean
        }
      },
      dispatchValue: any,
      returnValueOnly: boolean
    ): any
  }

const middleware: IMiddleware = (item, dispatchValue, returnValueOnly) => {
    let call = item?.features?.call || null;
    let check = item?.features?.check || null;
    let convert = item?.features?.convert || null;

    if(returnValueOnly !== true){

        //calls a specified function before reducer updates state
        if(call !== null){
            call(dispatchValue);
        }

        //checks to see if the dispatched value meets specified criteria then returns boolean
        if(check !== null){
            return check(dispatchValue);
        }

        return true;
    }
    if(convert !== null){
        return convert(dispatchValue);
    }
    
    return dispatchValue;
}

export default middleware;