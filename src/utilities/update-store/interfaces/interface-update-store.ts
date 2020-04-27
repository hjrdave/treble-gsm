
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
                    hold?: boolean,
                    append?: boolean
                } | false
            }
        ) => object,
        options?: {
            enableMiddleware?: boolean,
            toggle?: boolean,
            hold?: boolean,
            append?:boolean
        }
    ): void
}