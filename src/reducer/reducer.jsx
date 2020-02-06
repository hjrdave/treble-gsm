/*App Reducer*/
import uniqid from 'uniqid';


const buildReducer = (store) => {


  let Reducer = (state, action) => {
      
      let subscribeID = state.subscribeID;    
      let historyID = state.historyID;
      let storeID = state.storeID;

      let reducerActions = {
        'updateHistory' : () => {
          return { 
            ...state, 
            history: action.updateHistory
          }
        },
        'updateStoreID' : () => {
          return { 
            ...state, 
            storeID: storeID + 1
          }
        },
        'updateHistoryID' : () => {
          return { 
            ...state, 
            historyID: action.updateHistoryID
          }
        },
        'updateSubscribeID' : () => {
          return { 
            ...state, 
            subscribeID: subscribeID + 1
          }
        }
      }

      store.map((item) => {
        reducerActions = {
          ...reducerActions,
          [item.action] : () => {
              return { ...state, [Object.keys(item.state)]: action[[item.action]] }
          }
        }
      })
 
      return reducerActions[action.type]();
    };
    return Reducer;
}
  export default buildReducer;
