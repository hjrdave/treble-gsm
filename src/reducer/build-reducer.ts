/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/

import { IBuildReducer, IReducer, IReducerActions } from '../interfaces';
import dispatchPipeline from './dispatch-pipeline';
import coreActions from './core-actions';


const buildReducer: IBuildReducer = (store) => {

  let Reducer: IReducer = (state, action) => {

    //built in reducer actions
    let reducerActions: IReducerActions = {
      ...coreActions
    }

    //dynamically builds reducer actions
    store.map((storeItem) => {
      reducerActions = {
        ...reducerActions,
        [storeItem.action]: () => dispatchPipeline(storeItem, state, action, store)
      }
    })

    //checks to makes sure action key exists and throws error if it doesnt
    try {
      return reducerActions[action.type]();
    }
    catch (err) {
      throw Error(`Store Action: ${action.type} - ${err}`);
    }

  };

  return Reducer;
}
export default buildReducer;
