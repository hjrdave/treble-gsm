import React from 'react';
import useTreble from '../../hooks/treble-hook';

export default function TrebleCoreComp() {

    //const Store = useTreble()[1];

    React.useEffect(() => {
        console.log('Treble Core renderComponent Loaded')
        // Store.update('addSubcribeAPIToMiddleware', subscribeAPIMethods);
    }, []);

    return null
}