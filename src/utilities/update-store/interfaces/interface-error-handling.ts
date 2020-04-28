export default interface IErrorHandling{

    (
        action: string,
        value: any,
        dispatch: (object: {
            [action: string]: any;
            type: string;
            options?: false | {
                enableMiddleware?: boolean | undefined,
                toggle?: boolean,
                hold?: boolean,
                append?:boolean
            } | undefined;
        }) => object,
        options?:{
            enableMiddleware?: boolean,
            toggle?: boolean,
            hold?: boolean,
            append?: boolean,
            remove?: boolean
        }
    ) : void
}