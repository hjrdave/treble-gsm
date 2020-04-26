
export default interface IUpdateStore {
    (
        action: string,
        value: any,
        dispatch: (
            object: {
                type: string,
                [action: string]: any,
                options?: {
                    enableMiddleware?: boolean,
                    toggle?: boolean,
                    currentValue?: any,
                    hold?: boolean
                } | false
            }
        ) => object,
        options?: {
            enableMiddleware?: boolean,
            toggle?: boolean,
            currentValue?: any,
            hold?: boolean
        }
    ): void
}