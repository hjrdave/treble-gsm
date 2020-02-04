

//App Global State Object

const buildState = (store) => {
  let state = {};
  store.map((obj) => {
      state = {...state, ...obj.state}
  });
  state = {...state, history: {...state}, subscribeID: 12345};
  return state;
}

  export default buildState;