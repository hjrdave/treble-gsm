import { TrebleGSM} from '../interfaces';

interface ICreateMiddlewareData{
    (
        dispatchValue: any,
        action: TrebleGSM.DispatchPayload, 
        storeItem: TrebleGSM.StoreItem, 
        state: TrebleGSM.StoreState, 
        store: TrebleGSM.StoreItem[],
        modules: TrebleGSM.ModuleData[]
    ): TrebleGSM.MiddlewareData
}

const createMiddlewareData: ICreateMiddlewareData = (dispatchValue, action, storeItem, state, store, modules) => {

    const handleInitialState = () => {
        const stateObject = store.find((item) => item.action === storeItem.action)?.state;
        if(stateObject){
            const stateKey = Object.keys(stateObject)[0]
            return stateObject[stateKey]
        }
    }

    return {
        dispatchValue: dispatchValue,
        dispatchPayload: action,
        initialDispatchValue: dispatchValue,
        action: storeItem.action,
        features: storeItem.features,
        currentState: state[Object.keys(storeItem.state)[0]],
        initialState: handleInitialState(),
        storeItems: store,
        storeState: state,
        storeModules: modules,
        subscribeAPI: state.TrebleSubscribeAPI
    }
}

export default createMiddlewareData