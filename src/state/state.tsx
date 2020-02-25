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
          persist?: boolean
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
      state = {...state, ...obj.state}
  });

  let newState = {
    subscribeID: 0,
    history: {
      reset: {},
      prev: {}
    }, 
    ...state
  };

  return newState;
}

  export default buildState;