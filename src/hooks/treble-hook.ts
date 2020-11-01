/*
    Treble Hook
    Gives child components that call it access to store.
*/

import { useContext } from "react";
import defaultContext from "../context";
import { TrebleGSM } from "../interfaces";
import {IUseTreble} from './interface';
import { IStoreUtilities } from "../utilities/interfaces";

const useTreble: IUseTreble = (context) => {
  try {
    if (context) {
      if (typeof context !== "object") {
        throw new TypeError("TrebleGSM: useTreble hook must only accept React.Context.");
      }
    }
    //assigns the default context or passed scoped context
    const trebleContext = context !== undefined ? context : defaultContext;

    //would like to figure out how to type trebleContext something other then 'any' without breaking everything
    const StoreSubscription: [{ [key: string]: any }, TrebleGSM.SubscribeAPI, IStoreUtilities] = useContext(
      trebleContext as any
    );

    //checks to make sure React is installed
    if (StoreSubscription === null) {
      throw new Error('TrebleGSM: StoreSubscription is null. Dependency React might be missing.');
    }

    const StoreItems = StoreSubscription[0];
    const SubscribeAPI = StoreSubscription[1];
    const StoreUtilities = StoreSubscription[2];

    //returns an Array [StoreItems (Global state object), StoreMethods (SubscribeAPI methods to interact with Store)]
    return [StoreItems, SubscribeAPI, StoreUtilities];

  } catch (error) {
    throw new Error(error);
  }

};

export default useTreble;
