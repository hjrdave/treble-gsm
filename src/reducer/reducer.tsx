/*
  buildReducer
  Consumes treble store and dynamically builds global state reducer.
*/
import middleware from '../middleware';

interface IBuildReducer {
  (
    store: {
      action: string;
      state: {
        [key: string]: any,
      };
      features?: {
        persist?: boolean,
        call?: () => void;
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
        [key: string]: any,
        options?: {
          enableMiddleware?: boolean
        }
      }
    ): {
      [key: string]: any
    }
  }

  let Reducer: IReducer = (state, action) => {

    let subscribeID = state?.subscribeID;
    let enableMiddleware = state?.enableMiddleware;

    type TReducerActions = {
      'updateHistory': () => object,
      'updateSubscribeID': () => object,
      [key: string]: any | undefined
    }

    let reducerActions: TReducerActions = {
      'updateHistory': () => {
        return {
          ...state,
          history: action.updateHistory
        }
      },
      'updateSubscribeID': () => {
        return ({
          ...state,
          subscribeID: subscribeID + 1
        })
      }
    }

    store.map((item) => {
      let objectProp = Object.keys(item.state)[0];
      let dispatchValue = action[item.action];

      reducerActions = {
        ...reducerActions,
        [item.action]: () => {

          //if updateStore passes an enableMiddleware false then the middleware pipeline is byepassed
          let enableMiddleware = action.options?.enableMiddleware;

          //middleware will return true unless a check function returns false
          if (enableMiddleware !== false) {
            if (middleware(item, dispatchValue, false) === true) {
              return {
                ...state,
                [objectProp]: middleware(item, dispatchValue, true)
              };
            }
            return { ...state };
          }
          return {
            ...state,
            [objectProp]: dispatchValue
          };
        }
      }
    })

    return reducerActions[action.type]();
  };
  return Reducer;
}
export default buildReducer;
