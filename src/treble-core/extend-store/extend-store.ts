import createStore from '../../create-store';

const TrebleCoreStore = createStore([
    {
        action: 'updateTrebleCoreData',
        state: {
            trebleCoreData: {
                subscribeAPI: null,
                moduleData: null
            }
        }
    }
]);

export default TrebleCoreStore