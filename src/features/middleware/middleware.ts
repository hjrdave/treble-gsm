/*
    Middleware
    Note: Middleware function runs before state gets to Reducer.
*/
import listManagement from './list-management';

interface IMiddleware {
    (
      dispatchValue: any,
      storeItem: {
        action: string,
        state: {
            [key: string]: any
        };
        features?: {
            call?: (state: any) => void,
            check?: (state: any) => boolean,
            convert?: (state: any) => any,
            persist?: boolean
        }
      },
      state: {
        [key: string]: any;
        subscribeID: number;
     },
      actionOptions?: {
        append?:boolean,
        limit?: number
      }
      
    ): any
  }

const middleware: IMiddleware = (dispatchValue, storeItem, state, actionOptions) => {
    //store features middleware
    let call = storeItem?.features?.call || null;
    let check = storeItem?.features?.check || null;
    let convert = storeItem?.features?.convert || null;

    //action options middleware
    let append = actionOptions?.append;

    //checks state agianst criteria then returns boolean
    let doesStatePass = (dispatchValue: any) => {
        //runs dispatched state agianst check middlware if it exists
        if(check !== null){
            return check(dispatchValue);
        }
        return true;
    }

    //calls a specified function before reducer updates state
    if(call !== null){
        call(dispatchValue);
    }

    //Makes sure state passes check and then will continue middleware pipeline and then return a value
    if(doesStatePass(dispatchValue) === true){

        /*manage lists*/
        //append list item to state array
        if(append){
            //allows convert to be ran on dispatchValue before outputed to list
            if(convert !== null){
                return listManagement(convert(dispatchValue), storeItem, state, actionOptions);
            }
            return listManagement(dispatchValue, storeItem, state, actionOptions)
        }

        //returns an augmented dispatchValue
        if(convert !== null){
            return convert(dispatchValue);
        }
        
        return dispatchValue
    }

    return null
}

export default middleware;