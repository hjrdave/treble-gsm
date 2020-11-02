/*
    TrebleGSM Namespace
*/

import React from 'react';
import {TrebleCore} from './treble-core/interfaces';

export namespace TrebleGSM{

  //Store State model
  export interface StoreState {
    [key: string]: any
  }

  //Store Item Features Model
  export interface StoreFeatures extends MiddlewareTypes {}

  //Store Item Model
  export interface StoreItem {
    action: string,
    state: StoreState
    features?: StoreFeatures
  }

  //Store Options Model
  export interface StoreOptions {
    context?: React.Context<never[]>,
    extendStore?: { data: StoreItem[] }[],
    modules?: ModuleData[]
  }

  export interface DispatchPayload {
    type: string;
    [key: string]: any;
    reducerAction: string;
    options?: {
      disableMiddleware?: boolean;
    };
  }

  export interface MiddlewareTypes{
        log?: (middlewareData: MiddlewareData) => void,
        check?: (middlewareData: MiddlewareData) => boolean,
        run?: (middlewareData: MiddlewareData) => void,
        process?: (middlewareData: MiddlewareData) => any,
        callback?: (middlewareData: MiddlewareData) => void
  }
  export interface MiddlewareData<State = void & any>{
    dispatchValue: any,
    dispatchPayload: DispatchPayload,
    initialDispatchValue: any,
    action: string,
    features: StoreFeatures | undefined,
    currentState: any,
    initialState: any,
    storeItems: StoreItem[],
    storeState: State,
    storeModules: ModuleData[],
    dispatchers: SubscribeAPI.Dispatchers
  }

  export interface ModuleData{
    name: string,
    extendStore?: {
      data: StoreItem[],
      options?: StoreOptions
    },
    featureKeys?: string[],
    subscribeAPI?: {
        dispatchers?: {[key: string]: (...params: any) => void},
        reducerActions?: {[key: string]: (middlewareData: MiddlewareData) => any}
    },
    middleware?: MiddlewareTypes,
    renderComponent?: React.ReactNode
  }

  export type UseTreble<State, Actions = void> = [State, SubscribeAPI.Dispatchers, SubscribeAPI.Utilities<Actions>];
  export namespace SubscribeAPI{
      export interface Dispatchers extends TrebleCore.Dispatchers{
        dispatch: (payload: DispatchPayload) => DispatchPayload
      }

      export interface Utilities<T = void> {
        actions: T | {[key:string]: string};
        stateKeys: string[];
        actionKeys: string[];
        storeData: any
    }
  }
 

}



