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
            call?: () => void;
            check?: (state: any) => boolean
        }
      },
      actionName: any
    ): any
  }

const middleware: IMiddleware = (item, actionName) => {
    let call = item.features?.call || null;
    let check = item.features?.check || null;
    let dispatchValue = actionName;

    //calls a specified function before reducer updates state
    if(call !== null){
        call();
    }

    //checks to see if the dispatched value meets specified criteria then returns boolean
    if(check !== null){
        return check(dispatchValue);
    }
    return true
}

export default middleware;