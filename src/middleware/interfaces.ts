import {TrebleGSM} from '../interfaces';

export interface IRunMiddleware {
  (
    dispatchValue: any,
    storeItem: {
      action: string,
      state: TrebleGSM.StoreState,
      features?: TrebleGSM.StoreFeatures
    },
    state: TrebleGSM.StoreState,
    action: TrebleGSM.DispatchPayload,
    store: any,
    modules: TrebleGSM.ModuleData[]
  ): any
}