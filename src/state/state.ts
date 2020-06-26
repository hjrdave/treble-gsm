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
    [key: string]: any
  }
}

const buildState: IBuildState = (store) => {

 let state = {};

  store.map((obj) => {
    state = {...state, ...obj.state};
  });
  
  let initialState = {
    subscribeID: 0,
    ...state
  };

  return initialState;
}

  export default buildState;