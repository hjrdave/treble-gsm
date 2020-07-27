/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/
import coreActions from "./core-actions";
import middleware from "../middleware";
import { IBuildReducer, IReducer, IReducerActions } from "../interfaces";
import dispatchPipeline from "./dispatch-pipeline";

const buildReducer: IBuildReducer = (store) => {
  let Reducer: IReducer = (state, action) => {
    let reducerActions: IReducerActions = {
      ...coreActions(state),
    };

    //dynamically builds reducer
    store.map((storeItem) => {
      let objectProp = Object.keys(storeItem.state)[0];
      let dispatchValue = action[storeItem.action];
      let disableMiddleware = action.options?.disableMiddleware;

      reducerActions = {
        ...reducerActions,
        [storeItem.action]: dispatchPipeline(),
      };
    });
    //checks to makes sure action key exists and throws error if it doesnt
    try {
      return reducerActions[action.type]();
    } catch (err) {
      throw Error(`Store Action: ${action.type} - ${err}`);
    }
  };

  return Reducer;
};
export default buildReducer;
