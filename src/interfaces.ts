/*
    Shared Interfaces
*/

import defaultContext from './context';
import {ISubscribeAPI} from './subscribe/interfaces';

export interface IStoreState{
    [key: string]: any
}

export interface IStoreFeatures {
    persist?: boolean,
    keys?: boolean,
    call?: (state: any) => void,
    check?: (state: any) => boolean,
    process?: (state: any) => any,
    callback?: (state: any) => void
}

export interface IStoreItem {
    action: string,
    state: IStoreState
    features?: IStoreFeatures
}

export interface IStoreOptions {
    context?: React.Context<never[]>,
    extendStore?: { data: IStoreItem[] }[],
    modules?: any[]
}

export interface IContext{
    context: [any[], React.Dispatch<any>]
}

export interface ITreble {
    children: JSX.Element | JSX.Element[];
    store: {
        data: IStoreItem[],
        scope?: React.Context<never[]>,
        modules?: any[]
    }
}

export interface IBuildState{
    (
      store: IStoreItem[]
    ): {
      [key: string]: any
    }
  }

export interface IBuildReducer {
    (
      store: IStoreItem[]
    ): any
  }

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

export interface ICreateStore {
  (
      storeData: IStoreItem[],
      options?: IStoreOptions
  ): {
      data: IStoreItem[],
      options?: IStoreOptions
      } 
  }

export interface IReducerActions{
    'updateSubscribeID': () => object,
    [key: string]: any | undefined
}


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

export interface IUseTreble {
  (
      context?: typeof defaultContext
  ): any
}

export interface IUseTrebleSubscribe<P>{
  (
      context?: IUseTreble
  ): [any, ISubscribeAPI]
}
