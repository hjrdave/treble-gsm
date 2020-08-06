/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, { useReducer } from "react";
import subscribeAPI from "../subscribe";

const Provider = ({ reducer, data, children, scope, store }: any) => {
  const Context = scope;
  const trebleStore = useReducer(reducer, data);
  const storeItems = trebleStore[0];
  const dispatch = trebleStore[1];

  return (
    <>
      <Context.Provider value={[storeItems, subscribeAPI(dispatch, store)]}>
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
