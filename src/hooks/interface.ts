import { TrebleGSM } from '../interfaces';



export declare namespace Hooks {

  export interface UseTreble {
    (
      context?: any
    ): [{ [key: string]: any }, TrebleGSM.SubscribeAPI.Dispatchers, TrebleGSM.SubscribeAPI.Utilities]
  }

}