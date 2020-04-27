/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/
import middleware from '../features/middleware';
import {IReducer, IBuildReducer, IReducerActions} from './interfaces';


const buildReducer: IBuildReducer = (store) => {

  let Reducer: IReducer = (state, action) => {

    let subscribeID = state?.subscribeID;

    let reducerActions: IReducerActions = {
      'updateHistory': () => {
        return {
          ...state,
          history: action.updateHistory
        }
      },
      'updateSubscribeID': () => {
        return ({
          ...state,
          subscribeID: subscribeID + 1
        })
      }
    }

    store.map((storeItem) => {
      let objectProp = Object.keys(storeItem.state)[0];
      let dispatchValue = action[storeItem.action];
      let enableMiddleware = action.options?.enableMiddleware;
      reducerActions = {
        ...reducerActions,
        [storeItem.action]: () => {

          //if middleware is enabled dispatchValue will go through middleware pipeline
          if(enableMiddleware !== false){
            let middlewareValue = middleware(dispatchValue, storeItem, state, action?.options);
            
            //makes sure dispatchValue passes check middleware
            if(middlewareValue !== null){
              return {
                ...state,
                [objectProp]: middlewareValue
              };
            }
            return { ...state }
          }

          //if middleware is not enabled dispatchValue middleware pipeline will be bypassed
          return {
            ...state,
            [objectProp]: dispatchValue
          };
        }
      }
    })

    return reducerActions[action.type]();
  };
  return Reducer;
}
export default buildReducer;
