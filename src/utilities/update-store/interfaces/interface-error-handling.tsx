export default interface IErrorHandling{

    (
        action: string,
        value: any,
        dispatch: (object: {
            [action: string]: any;
            type: string;
            options?: false | {
                enableMiddleware?: boolean | undefined;
            } | undefined;
        }) => object,
        options?:{
            enableMiddleware?: boolean
        }
    ) : void
}