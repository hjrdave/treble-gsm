

//App Global State Object

const buildState = (store) => {
  let state = {};
  store.map((obj) => {
      state = {...state, ...obj.state}
  });
  state = {
    subscribeID: 0,
    storeID: 0,
    historyID: 0,
    history: {
      reset: {},
      prev: {}
    },
    ...state
  };
  return state;
}

  export default buildState;