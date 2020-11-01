interface IOptions{
    disableMiddleware?: boolean
}



export namespace TrebleCore{
    export interface Dispatchers{
        update: (action: string, dispatchValue: any, options?: IOptions) => void,
        reset: (action: string, options?: IOptions) => void,
        toggle: (action: string, dispatchValue?: any, options?: IOptions) => void,
    }
}