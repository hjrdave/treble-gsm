/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/

interface IBuildReducer {
  (
    store: {
      action: string;
      state: {
          [key: string]: any;
      };
      features?: {
          persist?: boolean
      }
    }[]
  ): any
}

const buildReducer: IBuildReducer = (store) => {

  interface IReducer {
    (
      state: {
        [key: string]: any,
        subscribeID: number
      },
      action: {
        type: string,
        [key: string]: any
      }
    ): {
      [key: string]: any
    }
  }
  let Reducer:IReducer = (state, action) => {
      
      let subscribeID = state.subscribeID;  

      type TReducerActions = {
        'updateHistory': () => object,
        'updateSubscribeID': () => object,
        [key: string]: any | undefined
      }
      let reducerActions: TReducerActions = {
        'updateHistory' : () => {
          return { 
            ...state, 
            history: action.updateHistory
          }
        },
        'updateSubscribeID' : () => {
          return ({ 
            ...state, 
            subscribeID: subscribeID + 1
          })
        }
      }

      store.map((item) => {
        let objectProp = Object.keys(item.state)[0];
        let actionName = action[item.action];

        reducerActions = {
          ...reducerActions,
          [item.action] : () => {
              return { ...state, [objectProp] : actionName }
          }
        }
      })
 
      return reducerActions[action.type]();
    };
    return Reducer;
}
  export default buildReducer;
