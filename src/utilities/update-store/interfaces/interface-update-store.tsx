
export default interface IUpdateStore {
    (
        action: string,
        value: any,
        dispatch: (
            object: {
                type: string,
                [action: string]: any,
                options?: {
                    enableMiddleware?: boolean
                } | false
            }
        ) => object,
        options?: {
            enableMiddleware?: boolean
        }
    ): void
}