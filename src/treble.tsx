/*
    Treble Provider Container
    Provider component that wraps around components that will consume global state.
*/

import React, { useMemo } from "react";
import Provider from "./provider";
import buildState from "./state";
import buildReducer from "./reducer";
import Context from "./context";
import { Persist } from "./persist";
import { ITreble } from "./interfaces";
import TrebleCore from './treble-core';

function Treble({ children, store }: ITreble) {

  //error handling
  try {
    if (typeof store !== "object") {
      throw new TypeError("TrebleGSM: Treble store prop must be an array.");
    }
  } catch (error) {
    throw error;
  }

  const
    //passed Store
    Store = useMemo(() => store.data, [store.data]),

    //builds state from Store
    State = buildState([...Store]),

    //store modules
    Modules = (store?.modules) ? [...store.modules, TrebleCore] : [TrebleCore],

    //builds reducer from Store
    Reducer = buildReducer([...Store], Modules),

    //the default context used by TrebleGSM (Should only be used for App global state)
    defaultContext = Context,

    //optional passed scoped context (substitutes default context. Used for scoped Treble Providers)
    scopedContext = store?.scope;

  return (
    <>
      {/**Treble Provider */}
      <Provider
        initialState={State}
        reducer={Reducer}
        store={Store}
        scope={scopedContext !== undefined ? scopedContext : defaultContext}
        modules={Modules}
      >
        <>
          <Persist store={Store} />
          {children}
        </>
      </Provider>
    </>
  );
}

export default Treble;
