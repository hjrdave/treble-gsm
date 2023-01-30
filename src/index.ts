import TrebleGSM from "./TrebleGSM";

const Store = new TrebleGSM();

Store.addItem({
    key: 'food',
    state: 'pie',
    features: {
        persist: false
    }
});
Store.addItem({
    key: 'age',
    state: 50,
    features: {
        persist: false
    }
});
Store.addItem({
    key: 'name',
    state: 'Kevin',
    features: {
        persist: false
    }
});
Store.onUpdate((dispatchItem) => console.log(dispatchItem));
Store.setState('food', 'poop');
Store.setState('food', 'poop2');
Store.setState('name', 'Pooh');
Store.setState('food', 'moo');
Store.setState('name', 'more moo');


