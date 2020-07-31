/*
    Dispatch Pipeline
    - This is the reducer dispatch value pipeline. 
    - It puts a dispatch value through middleware modules before being sent to reducer action
*/

import middleware from "../middleware";

interface IDispatchPipeline {
  (
    storeItem: {
      action: string;
      state: {
        [key: string]: any;
      };
    },
    state: any,
    action: {
      [key: string]: any;
      type: string;
      options?: {
        disableMiddleware?: boolean | undefined;
      };
    }
  ): { [key: string]: any };
}

const dispatchPipeline: IDispatchPipeline = (storeItem, state, action) => {
  let stateName = Object.keys(storeItem.state)[0];
  let dispatchedValue = action[storeItem.action];
  let disableMiddleware = action.options?.disableMiddleware;

  if (disableMiddleware !== true) {
    let middlewareValue = middleware(
      dispatchedValue,
      storeItem,
      state,
      action as any
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
