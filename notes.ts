/*
interface ICreateModule{
    name: string,
    extendStore?: any[],
    featureKeys?: any[],
    subscribeAPI?: {
        utilityMethods?: any[],
        subscribeMethods?: any[],
        reducerActions?: any[]
    },
    middleware?: {
        call?: any,
        check?: any,
        process?: any,
        callback?: any
    },
    renderComponent?: JSX.Element
}

const createModule = (props: ICreateModule) => null;

const TrebleListManager = createModule({
    name: 'Treble List Manager',
    middleware:{
        
    }
})
*/

/*
//store data object for middleware (this object holds dispatch and store data that can get passed to middleware functions)
    let middlewareData: IMiddlewareData = {
        dispatchValue: dispatchValue,
        dispatchAction: {...action, dispatchTime: new Date()},
        processedValue: null,
        action: storeItem.action,
        features: storeItem.features,
        currentState: state[Object.keys(storeItem.state)[0]],
        storeItems: store,
        storeState: state,
        subscribeAPI: state.TrebleSubscribeAPI
    }
*/
/*
interface ICallSideEffect {
    (
        middlewareData: IMiddlewareData,
        callMiddleware: ((middlewareData: any) => void) | null
    ): void
}
*/