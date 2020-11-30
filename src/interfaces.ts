/*
    TrebleGSM Namespace
*/

import React from 'react';
import { TrebleCore } from './treble-core/module/interfaces';

export declare namespace TrebleGSM {

  //Store State model
  export interface StoreState {
    [key: string]: any
  }

  //Store Item Features Model
  export interface StoreFeatures extends MiddlewareTypes { [key: string]: any }

  //Store Item Model
  export interface StoreItem {
    action: string,
    state: StoreState
    features?: StoreFeatures
  }

  //Store Options Model
  export interface StoreOptions {
    context?: any,
    extendStore?: { data: StoreItem[] }[],
    modules?: ModuleData[],
    inheritModules?: boolean
  }

  export interface DispatcherOptions {
    disableMiddleware?: boolean;
    sideEffectOnly?: boolean;
    renderGuard?: boolean;
    allowPayloadListeners?: boolean;
  }

  export interface DispatchPayload {
    type: string;
    [key: string]: any;
    reducerAction: string;
    options?: DispatcherOptions
  }

  export interface MiddlewareTypes {
    log?: (middlewareData: MiddlewareData) => void,
    check?: (middlewareData: MiddlewareData) => boolean,
    run?: (middlewareData: MiddlewareData) => void,
    process?: (middlewareData: MiddlewareData) => any,
    callback?: (middlewareData: MiddlewareData) => void,
    payloadListener?: (payload: DispatchPayload) => void
  }
  export interface MiddlewareData<State = void & any> {
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
    dispatchers: SubscribeAPI.Dispatchers<{}>
  }

  export interface ModuleData {
    name: string,
    extendStore?: {
      data: StoreItem[],
      options?: StoreOptions
    },
    featureKeys?: string[],
    dispatchers?: { [key: string]: (...params: any) => void },
    reducerActions?: { [key: string]: (middlewareData: MiddlewareData) => any }
    middleware?: MiddlewareTypes,
    renderComponent?: React.ReactNode,
    initOrder?: number,
    namespaceDispatchers?: string,
    namespaceFeatureKeys?: {
      [key: string]: string
    }
  }

  export interface ModuleDispatchers<T> { }

  export namespace SubscribeAPI {

    export type Dispatchers<T extends {}> = T & {
      dispatch: (payload: DispatchPayload) => DispatchPayload
    } & TrebleCore.Dispatchers

    export interface Utilities<T = void> {
      actions: T | { [key: string]: string };
      stateKeys: string[];
      actionKeys: string[];
      storeData: any,
      moduleData: TrebleGSM.ModuleData[]
    }

  }

  export type UseTreble<State, Actions = void, Dispatchers = void> = [State, SubscribeAPI.Dispatchers<Dispatchers>, SubscribeAPI.Utilities<Actions>];

}



