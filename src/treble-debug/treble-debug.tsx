
interface ITrebleDebug {
    (
        store: {
            data: {
                action: string,
                state: {
                    [key: string]: any
                },
                features?: {
                    call?: (state: any) => void;
                    check?: (state: any) => boolean
                    convert?: (state: any) => any,
                    persist?: boolean
                }
            }[],
            scope?: React.Context<never[]>
        }
    ): void
}

export const trebleDebug: ITrebleDebug = ({ data }) => {

    const trebleError = 'Treble Error:';
    const featuresList = ['persist', 'call', 'check', 'convert'];

    data.forEach(({ action, state, features }) => {
        //checks Store.action type
        if (typeof action !== 'string') {
            console.error(`${trebleError} Store.action must be of type 'string'.`);
        }

        //checks Store.state type
        if (typeof state !== 'object') {
            console.error(`${trebleError} Store.state must be of type 'object'.`);
        }

        //checks to see if Store.state has multiple properties
        if (Object.keys(state).length > 1 && typeof state === 'object') {
            console.error(`${trebleError} Store.state can only have one property.`);
        }

        //checks Store.features 
        if (features) {

            //checks type
            if (typeof features !== 'object') {
                console.error(`${trebleError} Store.features must be of type 'object'.`);
            }

            //makes sure props are legitimate
            Object.keys(features).forEach((feature) => {
                if (featuresList.includes(feature) !== true) {
                    console.error(`${trebleError} Store.features.${feature} is not a valid treble feature.`);
                }
            });

        }
    })
};