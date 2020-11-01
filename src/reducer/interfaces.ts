import {TrebleGSM} from '../interfaces';

export interface IBuildReducer {
  (
    store: TrebleGSM.StoreItem[],
    modules: TrebleGSM.ModuleData[]
  ): IReducer
}

export interface IReducer {
  (
    state: {
      [key: string]: any,
      subscribeID: number
    },
    action: TrebleGSM.DispatchPayload
  ): {
    [key: string]: any
  }
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
    action: TrebleGSM.DispatchPayload,
    store: any,
    modules: any
  ): { [key: string]: any };
}

export interface IReducerActions {
  [key: string]: any | undefined
}

