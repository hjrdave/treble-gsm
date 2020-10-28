import React from 'react';
import useTreble from '../../hooks/treble-hook';

export default function TrebleCoreComp() {

    const Store = useTreble()[1];

    React.useEffect(() => {
        (Store as any).update('addSubcribeAPIToMiddleware', Store)
    }, []);

    return null
}