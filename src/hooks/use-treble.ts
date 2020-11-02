/*
    Treble Hook
    Gives child components that call it access to store.
*/

import { useContext } from "react";
import defaultContext from "../context";
import { TrebleGSM } from "../interfaces";
import {Hooks} from './interface';

const useTreble: Hooks.UseTreble = (context) => {
  try {
    if (context) {
      if (typeof context !== "object") {
        throw new TypeError("TrebleGSM: useTreble hook must only accept React.Context.");
      }
    }
    //assigns the default context or passed scoped context
    const trebleContext = context !== undefined ? context : defaultContext;

    //would like to figure out how to type trebleContext something other then 'any' without breaking everything
    const storeSubscription: [{ [key: string]: any }, TrebleGSM.SubscribeAPI.Dispatchers<{}>, TrebleGSM.SubscribeAPI.Utilities] = useContext(
      trebleContext as any
    );

    //checks to make sure React is installed
    if (storeSubscription === null) {
      throw new Error('TrebleGSM: StoreSubscription is null. Dependency React might be missing.');
    }

    const storeItems = storeSubscription[0];
    const dispatchers = storeSubscription[1];
    const utilities = storeSubscription[2];

    //returns an Array [StoreItems (Global state object), Dispatchers (dispatch methods to interact with Store), Utilities (helpers for subscribing) ]
    return [storeItems, dispatchers, utilities];

  } catch (error) {
    throw new Error(error);
  }

};

export default useTreble;
