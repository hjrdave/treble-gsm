
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
    const trebleWarn = 'Treble Warning:';
    const featuresList = ['persist', 'call', 'check', 'convert'];

    data.forEach(({ action, state, features }, index) => {
         
        /** Store.js warnings and errors */
         
        //checks Store action type
        if (typeof action !== 'string') {
            console.error(`${trebleError} Store[${index}].action must be a string.`)
        }

        //checks Store state type
        if (typeof state !== 'object') {
            console.error(`${trebleError} Store[${index}].state must be an object.`)
        }

        //checks to see if Store state is empty
        if (!(Object.keys(state).length > 0) && typeof state === 'object') {
            console.warn(`${trebleWarn} Store[${index}].state must have one property.`);
        }

        //checks to see if Store state has multiple properties
        if (Object.keys(state).length > 1 && typeof state === 'object') {
            console.error(`${trebleError} Store[${index}].state can only have one property.`);
        }

        //checks Store features 
       if(features !== undefined){
            //checks type
            if (typeof features !== 'object') {
                console.error(`${trebleError} Store[${index}].features must be an object. `);
            }
            
            //makes sure props are legitimate
            Object.keys(features).forEach((feature) => {
                if (featuresList.includes(feature) !== true) {
                    console.error(`${trebleError} Store[${index}].features property ${feature} is not a valid property.`);
                }
            });

            //checks property persist
            if(typeof features.persist !== 'boolean' && features.persist !== undefined){
                console.error(`${trebleError} Store.[${index}].features[${index}].persist must be a boolean.`);
            }

            //checks property call
            if(typeof features.call !== 'function' && features.call !== undefined){
                console.error(`${trebleError} Store[${index}].call must be a function.`);
            }

            //checks property check
            if(typeof features.check !== 'function' && features.check !== undefined){
                console.error(`${trebleError} Store[${index}].features.check must be a function.`);
            } 

            //checks property convert
            if(typeof features.convert !== 'function' && features.convert !== undefined){
                console.error(`${trebleError} Store[${index}].features.convert must be a function.`);
            } 
       }
      
    })
};