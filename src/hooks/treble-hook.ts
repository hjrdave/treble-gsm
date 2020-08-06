/*
    Treble Hook
    Gives child components that call it access to store.
*/

import { useContext } from "react";
import defaultContext from "../context";
import { IUseTreble } from "../interfaces";
import { ISubscribeAPI } from "../subscribe/interfaces";

const useTreble: IUseTreble = (context) => {
  try {
    if (context) {
      if (typeof context !== "object") {
        throw new TypeError("useTreble hook must only accept React.Context.");
      }
    }
  } catch (error) {
    throw error;
  }

  //assigns the default context or passed scoped context
  const trebleContext = context !== undefined ? context : defaultContext;

  //would like to figure out how to type trebleContext something other then 'any' without breaking everything
  const StoreSubscription: [{ [key: string]: any }, ISubscribeAPI] = useContext(
    trebleContext as any
  );

  //returns an Array [StoreItems (Global state object), StoreMethods (SubscribeAPI methods to interact with Store)]
  return [StoreSubscription[0], StoreSubscription[1]];
};

export default useTreble;
