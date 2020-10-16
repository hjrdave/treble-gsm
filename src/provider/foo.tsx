import React from 'react';
import useTreble from '../hooks/treble-hook';

export default function Foo({ subscribeAPI }: any) {
    const Store = useTreble()[1];
    React.useEffect(() => {
        Store.update('addSubcribeAPIToMiddleware', subscribeAPI);
    }, []);
    return null
}