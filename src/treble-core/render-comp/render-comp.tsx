import React from 'react';
import useTreble from '../../hooks/use-treble';

export default function RenderComp() {

    const Store = useTreble()[1];

    React.useEffect(() => {
        Store.update('addSubcribeAPIToMiddleware', Store)
    }, []);

    return null
}