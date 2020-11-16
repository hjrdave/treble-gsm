import createStore from '../../../create-store';

const TrebleCoreStore = createStore([
    {
        action: 'updateTrebleCoreData',
        state: {
            trebleCoreData: {
                subscribeAPI: null,
                moduleData: null
            }
        }
    },
    {
        action: 'runTrebleCoreMiddleware',
        state: {
            trebleCoreMiddleware: true
        },
        features: {
            run: (data) => {
                data.storeItems.map((item) => {
                    data.dispatchers?.reset(item.action);
                });
            }
        }
    }
]);

export default TrebleCoreStore