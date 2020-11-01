import {TrebleGSM} from '../interfaces';

export interface IUseTreble {
  (
    context?: React.Context<Partial<{ [key: string]: any } | null>>
  ): [{ [key: string]: any }, TrebleGSM.SubscribeAPI, TrebleGSM.StoreUtilities]
}