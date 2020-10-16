/*
    Core Reducer Actions Object
    - Default actions 
*/

const coreActions = (state: any) => {
  //console.log(state)
  const actions = {
    addSubcribeAPIToMiddleware: () => {
      return {
        ...state,
        TrebleSubscribeAPI: state.TrebleSubscribeAPI,
      };
    },
  };
  return actions;
};

export default coreActions;
