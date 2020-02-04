/*App Reducer*/
import uniqid from 'uniqid';


const buildReducer = (store) => {


  let Reducer = (state, action) => {

      let reducerActions = {
        'updateHistory' : () => {
          return { 
            ...state, 
            history: action.updateHistory
          }
        },
        'updateSubscribeID' : () => {
          return { 
            ...state, 
            subscribeID: action.updateSubscribeID
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
