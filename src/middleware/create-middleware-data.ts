import { IMiddlewareData, IModuleData, IReducerAction, IStoreItem, IStoreState } from '../interfaces';

interface ICreateMiddlewareData{
    (
        dispatchValue: any,
        action: IReducerAction, 
        storeItem: IStoreItem, 
        state: IStoreState, 
        store: IStoreItem[],
        modules: IModuleData[]
    ): IMiddlewareData
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
        dispatchAction: action,
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