/*
    A middleware that assignes static keys to Store object lists
    - Feature.key must be set to true to activate this.
    - Assigns the property trebleKey with an index value
*/

interface IGenerateStaticKeys {
    (
        dispatchValue: {
            [key: string]: any
        }[] | null,
        staticKeysMiddleware: boolean | undefined,
    ): {
        [key: string]: any;
        trebleKey: number;
    }[] | {
        [key: string]: any;
    }[] | null
}

const generateStaticKeys: IGenerateStaticKeys = (dispatchValue, staticKeysMiddleware) => {

    if (staticKeysMiddleware && dispatchValue !== null) {
        let dispatchValueWithKeys: { trebleKey: number, [key: string]: any }[] = dispatchValue?.map(
            (stateItem: any, index: number) => {
                return { ...stateItem, trebleKey: index };
            }
        );
        return dispatchValueWithKeys;
    }
    return dispatchValue;
}

export default generateStaticKeys;