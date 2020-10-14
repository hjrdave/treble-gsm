/*
    Dispatch Pipeline
    - This is the reducer dispatch value pipeline. 
    - It puts a dispatch value through middleware modules before being sent to reducer action
*/

import runMiddleware from "../middleware";
import { IDispatchPipeline } from '../interfaces';

const dispatchPipeline: IDispatchPipeline = (storeItem, state, action, store) => {
  let stateName = Object.keys(storeItem.state)[0];
  let dispatchedValue = action[storeItem.action];
  let disableMiddleware = action.options?.disableMiddleware;
  //run middleware if not disabled
  if (!(disableMiddleware)) {

    let middlewareValue = runMiddleware(
      dispatchedValue,
      storeItem,
      state,
      action,
      store
    );

    //makes sure dispatchValue passes check middleware
    if (middlewareValue !== null) {
      return {
        ...state,
        [stateName]: middlewareValue,
      };
    }
    return { ...state };
  }

  //if middleware is disabled dispatchValue middleware pipeline will be bypassed
  return {
    ...state,
    [stateName]: dispatchedValue,
  };
};

export default dispatchPipeline;
