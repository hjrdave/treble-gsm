/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/

import { IBuildReducer, IReducer, IReducerActions } from '../interfaces';
import runDispatchPipeline from './run-dispatch-pipeline';

const buildReducer: IBuildReducer = (store, modules) => {

  let Reducer: IReducer = (state, action) => {
   
    let reducerActions: IReducerActions = {}

    //adds reducer actions from store
    store.map((storeItem) => {
      reducerActions = {
        ...reducerActions,
        [storeItem.action]: () => runDispatchPipeline(storeItem, state, action, store, modules)
      }
    });
    
    //adds reducer actions from module.extendStore (if exists)
    modules.map((module) => {
      module.extendStore?.data.map((storeItem) => {
        reducerActions = {
          ...reducerActions,
          [storeItem.action]: () => runDispatchPipeline(storeItem, state, action, store, modules)
        }
      })
    });

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
