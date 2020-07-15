/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/
import middleware from '../middleware';
import {IBuildReducer, IReducer, IReducerActions} from '../interfaces';


const buildReducer: IBuildReducer = (store) => {

  let Reducer: IReducer = (state, action) => {
   
      let subscribeID = state?.subscribeID;

    let reducerActions: IReducerActions = {
      'updateSubscribeID': () => {
        return ({
          ...state,
          subscribeID: subscribeID + 1
        })
      }
    }
    //dynamically builds reducer
    store.map((storeItem) => {

      let objectProp = Object.keys(storeItem.state)[0];
      let dispatchValue = action[storeItem.action];
      let disableMiddleware = action.options?.disableMiddleware;

      reducerActions = {
        ...reducerActions,
        [storeItem.action]: () => {
          
          //makes sure middleware is not disabled by subscribeAPI and then lets the dispatchValue go through middleware pipeline
          if(disableMiddleware !== true){
            let middlewareValue = middleware(dispatchValue, storeItem, state, action as any);
            
            //makes sure dispatchValue passes check middleware
            if(middlewareValue !== null){
              return {
                ...state,
                [objectProp]: middlewareValue
              };
            }
            return { ...state }
          }

          //if middleware is disabled dispatchValue middleware pipeline will be bypassed
          return {
            ...state,
            [objectProp]: dispatchValue
          };
        }
      }
    })
    //checks to makes sure action key exists and throws error if it doesnt
    try{
      return reducerActions[action.type]();
    }
    catch(err){
      throw Error(`Store Action: ${action.type} - ${err}`);
    }

    
  };
  
  return Reducer;
}
export default buildReducer;
