/*
    Shared Interfaces
*/

import defaultContext from './context';
import {ISubscribeAPI} from './subscribe/interfaces';

// #region Shared Interfaces 

//Store State model
export interface IStoreState{
    [key: string]: any
}

//Store Item Features Model
export interface IStoreFeatures {
    persist?: boolean,
    keys?: boolean,
    call?: (state: any) => void,
    check?: (state: any) => boolean,
    process?: (state: any) => any,
    callback?: (state: any) => void
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

//Context Model
export interface IContext{
    context: [any[], React.Dispatch<any>]
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
export interface IBuildState{
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
export interface IReducer{
    (
        state: {
          [key: string]: any,
          subscribeID: number
        },
        action: {
          type: string,
          [key: string]: any,
          options?: {
            disableMiddleware?: boolean,
            limit?: number
          }
        }
      ): {
        [key: string]: any
      }
}

//Reducer Actions Model
export interface IReducerActions{
  'updateSubscribeID': () => object,
  [key: string]: any | undefined
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
      action: {
          subscribeType: 'remove' | 'orderBy' | 'append' | 'prepend'
      }

  ): any
}

//#endregion

//#region Hooks

//useTreble Hook Interface
export interface IUseTreble {
  (
      context?: typeof defaultContext
  ): any
}

//#endregion

//test
export interface IUseTrebleSubscribe<P>{
  (
      context?: IUseTreble
  ): [any, ISubscribeAPI]
}

/**SubscribeAPI */


