/*
    Dispatch Pipeline
    - This is the reducer dispatch value pipeline. 
    - It puts a dispatch value through middleware modules before being sent to reducer action
*/

const dispatchPipeline = () => {
  //makes sure middleware is not disabled by subscribeAPI and then lets the dispatchValue go through middleware pipeline
  if (disableMiddleware !== true) {
    let middlewareValue = middleware(
      dispatchValue,
      storeItem,
      state,
      action as any
    );

    //makes sure dispatchValue passes check middleware
    if (middlewareValue !== null) {
      return {
        ...state,
        [objectProp]: middlewareValue,
      };
    }
    return { ...state };
  }

  //if middleware is disabled dispatchValue middleware pipeline will be bypassed
  return {
    ...state,
    [objectProp]: dispatchValue,
  };
};

export default dispatchPipeline;
