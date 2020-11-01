/*
    Dispatch Pipeline
    - This is the reducer dispatch value pipeline. 
    - It puts a dispatch value through middleware modules before being sent to reducer action
*/

import runMiddleware from "../middleware";
import { IDispatchPipeline } from './interfaces';

const runDispatchPipeline: IDispatchPipeline = (storeItem, state, action, store, modules) => {
  const stateName = Object.keys(storeItem.state)[0];
  const dispatchValue = action[storeItem.action];
  const disableMiddleware = action.options?.disableMiddleware;
  
  //run middleware if not disabled
  if (!(disableMiddleware)) {

    const middlewareValue = runMiddleware(dispatchValue, storeItem, state, action, store, modules);

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
    [stateName]: dispatchValue,
  };
};

export default runDispatchPipeline;
