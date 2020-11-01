interface IOptions{
    disableMiddleware?: boolean
}

export interface ITrebleCoreSubscribeAPI{
    update: (action: string, dispatchValue: any, options?: IOptions) => void,
    reset: (action: string, options?: IOptions) => void,
    toggle: (action: string, dispatchValue?: any, options?: IOptions) => void,
}