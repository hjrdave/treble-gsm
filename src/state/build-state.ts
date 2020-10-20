/*
  buildState
  Consumes the treble store and dynamically builds out the global state based off of store.state.
*/

import { IBuildState } from "../interfaces";

const buildState: IBuildState = (store) => {
  let state = {
    TrebleSubscribeAPI: null
  };

  store.map((obj) => {
    state = { ...state, ...obj.state };
  });

  let initialState = {
    ...state,
  };

  return initialState;
};

export default buildState;
