/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/
import coreActions from "./core-actions";
import { IBuildReducer, IReducer, IReducerActions } from "../interfaces";
import dispatchPipeline from "./dispatch-pipeline";

const buildReducer: IBuildReducer = (store) => {
  let Reducer: IReducer = (state, action) => {
    let reducerActions: IReducerActions = {
      ...coreActions(state),
    };

    //dynamically builds reducer
    store.map((storeItem) => {
      reducerActions = {
        ...reducerActions,
        ...dispatchPipeline(storeItem, state, action),
      };
    });
    try {
      return reducerActions[action.type]();
    } catch (err) {
      throw Error(`Store Action: ${action.type} - ${err}`);
    }
  };

  return Reducer;
};
export default buildReducer;
