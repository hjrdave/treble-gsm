import React from 'react';
import useTreble from '../../hooks/treble-hook';

export default function TrebleCoreComp() {

    const Store = useTreble()[1];
    const Util = useTreble()[2];

    React.useEffect(() => {
        // Store.dispatch({
        //     type: 'addSubcribeAPIToMiddleware',
        //     addSubcribeAPIToMiddleware: Store
        // });
        (Store as any).update('addSubcribeAPIToMiddleware', Store)
    }, []);



    return null
}