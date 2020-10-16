/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, { useReducer } from "react";
import subscribeAPI from "../subscribe";
import storeUtilities from '../store-utilities';
import Foo from './foo';

const Provider = ({ reducer, data, children, scope, store }: any) => {
  const Context = scope;
  const trebleStore = useReducer(reducer, data);
  const storeItems = trebleStore[0];
  const dispatch = trebleStore[1];
  const subscribeAPIMethods = subscribeAPI(dispatch, store);

  return (
    <>
      <Context.Provider value={[storeItems, subscribeAPIMethods, storeUtilities(store)]}>
        <Foo subscribeAPI={subscribeAPIMethods} />
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
