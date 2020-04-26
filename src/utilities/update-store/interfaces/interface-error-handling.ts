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
                currentValue?: any,
                hold?: boolean
            } | undefined;
        }) => object,
        options?:{
            enableMiddleware?: boolean,
            toggle?: boolean,
            currentValue?: any,
            hold?: boolean
        }
    ) : void
}