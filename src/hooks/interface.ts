import {TrebleGSM} from '../interfaces';



export namespace Hooks{

  export interface UseTreble {
    (
      context?: React.Context<Partial<{ [key: string]: any } | null>>
    ): [{ [key: string]: any }, TrebleGSM.SubscribeAPI.Dispatchers, TrebleGSM.SubscribeAPI.Utilities]
  }

}