/*
    Shared Interfaces
*/

import React from 'react';
import { ISubscribeAPI } from './subscribe/interfaces';
import { IStoreUtilities } from './store-utilities/interfaces';

// #region Shared Interfaces 

//Store State model
export interface IStoreState {
  [key: string]: any
}

//Store Item Features Model
export interface IStoreFeatures {
  persist?: boolean,
  keys?: boolean,
  call?: (storeData: IMiddlewareData) => void,
  check?: (storeData: IMiddlewareData) => boolean,
  process?: (storeData: IMiddlewareData) => any,
  callback?: (storeData: IMiddlewareData) => void
}

//Store Item Model
export interface IStoreItem {
  action: string,
  state: IStoreState
  features?: IStoreFeatures
}

//Store Options Model
export interface IStoreOptions {
  context?: React.Context<never[]>,
  extendStore?: { data: IStoreItem[] }[],
  modules?: any[]
}

export interface IReducerAction {
  type: string,
  [key: string]: any,
  subscribeType: 'prepend' | 'remove' | 'orderBy' | 'append' | 'edit' | 'removeBatch';
  options?: {
    disableMiddleware?: boolean,
    limit?: number,
  }
}

// #endregion 

// #region Provider Interfaces 

//Treble Provider Model
export interface ITreble {
  children: JSX.Element | JSX.Element[];
  store: {
    data: IStoreItem[],
    scope?: React.Context<never[]>,
    modules?: any[]
  }
}
// #endregion 

// #region State Interfaces 

//BuildState Interface
export interface IBuildState {
  (
    store: IStoreItem[]
  ): {
    [key: string]: any
  }
}

// #endregion 

// #region Reducer Interfaces 

//BuildReducer Interface
export interface IBuildReducer {
  (
    store: IStoreItem[]
  ): any
}

//Main Reducer Interface
export interface IReducer {
  (
    state: {
      [key: string]: any,
      subscribeID: number
    },
    action: IReducerAction
  ): {
    [key: string]: any
  }
}

//Reducer Actions Model
export interface IReducerActions {
  'updateSubscribeID'?: () => object,
  [key: string]: any | undefined
}

export interface IDispatchPipeline {
  (
    storeItem: {
      action: string;
      state: {
        [key: string]: any;
      };
    },
    state: any,
    action: IReducerAction,
    store: any
  ): { [key: string]: any };
}

// #endregion 

// #region Store Interfaces

//CreateStore Interface
export interface ICreateStore {
  (
    storeData: IStoreItem[],
    options?: IStoreOptions
  ): {
    data: IStoreItem[],
    options?: IStoreOptions
  }
}

//#endregion

//#region Middleware Interfaces

//Main Middleware Interface
export interface IMiddleware {
  (
    dispatchValue: any,
    storeItem: {
      action: string,
      state: IStoreState,
      features?: IStoreFeatures
    },
    state: IStoreState,
    action: IReducerAction,
    store: any
  ): any
}

//#endregion

//#region Hooks
export interface IUseTreble {
  (
    context?: React.Context<Partial<{ [key: string]: any } | null>>
  ): [{ [key: string]: any }, ISubscribeAPI, IStoreUtilities]
}

//#endregion

//#region User Exported Interfaces and Types

//useTreble hook type (used to get state intelisense)
export type TUseTreble<State, Actions = void> = [State, ISubscribeAPI, IStoreUtilities<Actions>];

//data object that gets passed to middleware functions 
export interface IMiddlewareData<State = void>{
  dispatchValue: any,
  dispatchAction: IReducerAction & {
    dispatchTime: Date
  },
  processedValue: any,
  action: string,
  features: IStoreFeatures | undefined,
  currentState: any,
  storeItems: IStoreItem[],
  storeState: State | IStoreState
}

//#endregion

//#region Higher Order Functions

//withTreble

export interface IWithTreble {
  (Component: React.ComponentClass | React.FunctionComponent | any,
    options?: {
      store?:
      {
        data: IStoreItem[],
        scope?: React.Context<never[]>
      }
    }): any
}

//#endregion

