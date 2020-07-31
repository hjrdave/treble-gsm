/*
    Core Reducer Actions Object
    - Default actions 
*/

const coreActions = (state: any) => {
  const actions = {
    updateSubscribeID: () => {
      return {
        ...state,
        subscribeID: state.subscribeID + 1,
      };
    },
  };
  return actions;
};

export default coreActions;
