
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
                    append?: boolean,
                    prepend?: boolean,
                    remove?: boolean,
                    limit?: number,
                    orderBy?: string | boolean
                } | false
            }
        ) => object,
        options?: {
            enableMiddleware?: boolean,
            toggle?: boolean,
            hold?: boolean,
            append?:boolean,
            prepend?: boolean,
            remove?: boolean,
            limit?: number,
            orderBy?: string | boolean
        }
    ): void
}