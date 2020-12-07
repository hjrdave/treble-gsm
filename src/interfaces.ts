/*
    TrebleGSM Namespace
*/

import React from 'react';
import { ITrebleCore } from './treble-core/module/interfaces';

export declare namespace TrebleGSM {

  //Store State model
  export interface StoreState {
    [key: string]: any
  }

  //Store Item Features Model
  export interface StoreFeatures extends MiddlewareTypes { }

  //Store Item Model
  export interface StoreItem<S extends StoreState = StoreState, F extends StoreFeatures = StoreFeatures> {
    action: string,
    state: S,
    features?: F
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
    dispatchers: TrebleGSM.SubscribeAPI.Dispatchers
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
    namespace?: string,
    namespaceDispatchers?: boolean,
    namespaceFeatureKeys?: boolean,
    importModules?: ModuleData[]
  }

  export interface ModuleDispatchers<T> { }

  export namespace SubscribeAPI {

    export interface State {
      [key: string]: any
    }
    export interface Dispatchers extends ITrebleCore.Dispatchers {
      dispatch: (payload: DispatchPayload) => DispatchPayload;
    }

    export interface Utilities<T = void> {
      actions: T | { [key: string]: string };
      stateKeys: string[];
      actionKeys: string[];
      storeData: any,
      moduleData: TrebleGSM.ModuleData[]
    }

  }



}



