/*
  Context Provider
  Provider that consumes Reducer hook and provides state to wrapped children.  
*/
import React, { useReducer } from "react";
import subscribeAPI from "../subscribe";
import storeUtilities from '../store-utilities';

const Provider = ({ reducer, data, children, scope, store, modules }: any) => {
  const Context = scope;
  const trebleStore = useReducer(reducer, data);
  const storeItems = trebleStore[0];
  const dispatch = trebleStore[1];

  React.useEffect(() => {
    //console.log(modules);
  }, [])

  //store data that will be made accessible via the useTreble hook
  const trebleHookOutput = [storeItems, subscribeAPI(dispatch, store, modules), storeUtilities(store)]

  return (
    <>
      <Context.Provider value={trebleHookOutput}>
        {/** Render Module Components */}
        {
          modules?.map((module: any, index: number) => {
            return (
              (module?.renderComponent) ?
                <module.renderComponent key={index} /> : null
            )

          })
        }
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
