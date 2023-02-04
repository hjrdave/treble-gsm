import TypeGuard, { Types } from "./TypeGaurd";
import { DispatchItem } from "./Dispatcher";
export default class Middleware {

    private dispatchItem: DispatchItem;
    private typeGaurd = new TypeGuard();

    getDispatchItem = () => {
        return this.dispatchItem;
    }

    getKey = () => {
        return this.dispatchItem.key;
    }

    getState = () => {
        return this.dispatchItem.state;
    }

    //runs middleware pipeline
    runPipeline = () => {
        const dispatchItem = this.dispatchItem;
        const dispatchState = dispatchItem.dispatchState;
        const type = dispatchItem.type;
        const features = dispatchItem.features;
        let pipelineItem = {
            doesPass: false,
            dispatchItem: this.dispatchItem,
        };

        //makes sure state is accepted type
        if (this.typeGaurd.doesTypePass(dispatchState, type)) {

            //runs log middleware fn
            if (features?.log) {
                features.log(dispatchItem);
            }

            //runs check middleware fn
            if (features?.check && features?.check(dispatchItem)) {

                //runs process middleware fn
                if (features.process) {
                    return {
                        doesPass: true,
                        dispatchItem: {
                            ...dispatchItem,
                            processedState: features.process(dispatchItem)
                        }
                    }
                }
                return { ...pipelineItem, doesPass: true }
            }
        }
        console.error(`TrebleGSM: State must be of type ${dispatchItem.type}`);
        return pipelineItem;
    }

    public constructor(dispatchItem: DispatchItem) {
        this.dispatchItem = dispatchItem;
    }
};


