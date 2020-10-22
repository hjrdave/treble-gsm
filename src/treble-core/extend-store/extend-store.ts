import createStore from '../../create-store';

const TrebleCoreStore = createStore([
    {
        action: 'addSubcribeAPIToMiddleware',
        state: {
            TrebleSubscribeAPI: null
        }
    }
]);

export default TrebleCoreStore