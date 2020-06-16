/*
  buildState
  Consumes the treble store and dynamically builds out the global state based off of store.state.
*/

interface IBuildState {
  (
    store: {
      action: string;
      state: {
          [key: string]: any;
      };
      features?: {
          persist?: boolean,
          call?: (state: any) => void,
          check?: (state: any) => boolean,
          process?: (state: any) => any,
          callback?: (state: any) => void
      }
    }[]
  ): {
    subscribeID: number;
    history: {
      reset: {},
      prev: {}
    };
    [key: string]: any
  }
}

const buildState: IBuildState = (store) => {

 let state = {};

  store.map((obj) => {
    //sets the initial value for a queryed state if feature is set.
    if(obj.features?.query){
        let stateKey = Object.keys(obj.state)[0];
        let stateValue = [...obj.state[stateKey]];
        console.log(stateKey);
        obj.state[stateKey] = {
          raw: stateValue,
          query: stateValue,
          storeQuery: null
        }

      state = {...state, ...obj.state};
    }else{
      state = {...state, ...obj.state};
    }
  });

  let initialState = {
    subscribeID: 0,
    history: {
      reset: {},
      prev: {}
    }, 
    ...state
  };

  return initialState;
}

  export default buildState;