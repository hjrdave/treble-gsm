
export interface ISubscribeAPI{

        update: (
            action: string,
            dispatchValue: any,
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        remove: (
            action: string,
            targetValue: any,
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        toggle: (
            action: string,
            toggleValue: boolean,
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        append: (
            action: string,
            dispatchValue: any,
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        prepend: (
            action: string,
            dispatchValue: any,
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        orderBy: (
            action: string,
            dispatchValue: any,
            sortType: 'asc' | 'desc',
            options?: {
                disableMiddleware?: boolean
            }
        ) => void,

        edit: (
            action: string,
            dispatchValue: any,
            options?: {
                disableMiddleware?: boolean
            },
            dispatch?: any,
        ) => void,

        reset: (
            action: string,
            dispatch?: any
        ) => void,

        removeBatch: (
            action: string,
            targetBatch: any[],
            options?: {
                disableMiddleware?: boolean
            },
            dispatch?: any
        ) => void,

        getActions: (store: any) => string[],

        getStateKeys: (store: any) => string[],

        dispatch: any
}

export interface ICreateSubscribeAPI {
    (
        dispatch: any,
        store: any
    ): ISubscribeAPI
}