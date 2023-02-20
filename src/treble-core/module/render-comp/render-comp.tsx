import React from 'react';
import useTreble from '../../../hooks/use-treble';

interface Props {
    scope?: any;
}
export default function RenderComp({ scope }: Props) {

    const [{ trebleCoreData }, Store, Utils] = useTreble(scope);


    React.useEffect(() => {
        Store.update('updateTrebleCoreData', {
            ...trebleCoreData,
            subscribeAPI: Store,
            moduleData: Utils.moduleData
        })
    }, []);

    return null
}