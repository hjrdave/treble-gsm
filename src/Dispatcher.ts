import { ITrebleGSM } from "./interfaces";
import { default as Emitter } from "events";
import TrebleGSM from "./TrebleGSM";

export default class Dispatcher {

    private EventEmitter: Emitter;
    private dispatchItem?: ITrebleGSM.DispatchItem;

    listen = (key: any, callbackfn: (item: ITrebleGSM.DispatchItem) => void) => {
        this.EventEmitter.on(key, () => {
            callbackfn(this.dispatchItem as any)
        });
    }
    stopListening = (key: string) => {
        this.EventEmitter.removeListener(key, () => null);
    }
    dispatch = (item: ITrebleGSM.DispatchItem) => {
        this.dispatchItem = item;
        this.EventEmitter.emit(item.key);
    }

    public constructor() {
        this.EventEmitter = new Emitter();
        this.EventEmitter.setMaxListeners(Number.MAX_SAFE_INTEGER);
    }
};


