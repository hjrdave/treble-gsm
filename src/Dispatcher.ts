import { default as Emitter } from "events";

export interface DispatchItem {
    key: string,
    currentState: any;
    newState: any;
}
export default class Dispatcher {

    private EventEmitter: Emitter;
    private dispatchItem?: DispatchItem;

    listen = (key: any, callbackfn: (item: DispatchItem) => void) => {
        this.EventEmitter.on(key, () => {
            callbackfn(this.dispatchItem as any)
        });
    }
    stopListening = (key: string) => {
        this.EventEmitter.removeListener(key, () => null);
    }
    dispatch = (item: DispatchItem) => {
        this.dispatchItem = item;
        this.EventEmitter.emit(item.key);
    }

    public constructor() {
        this.EventEmitter = new Emitter();
        this.EventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);
    }
};


