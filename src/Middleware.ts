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

    doesTypePass = (state: any, type?: Types) => {
        return this.typeGaurd.doesTypePass(state, type)
    }

    //runs middleware pipeline
    runPipeline = () => {
        const dispatchItem = this.dispatchItem;
        const dispatchState = dispatchItem.dispatchState;
        const type = dispatchItem.type;
        const features = dispatchItem.features;
        const doesTypePass = this.doesTypePass(dispatchState, type);
        let pipelineItem = {
            doesPass: false,
            dispatchItem: this.dispatchItem,
        };
        //makes sure state is accepted type
        if (doesTypePass) {

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
            } else {
                return { ...pipelineItem, doesPass: true }
            }
        } else {
            console.error(`TrebleGSM: State must be of type ${dispatchItem.type}`);
            return pipelineItem;
        }
    }

    public constructor(dispatchItem: DispatchItem) {
        this.dispatchItem = dispatchItem;
    }
};


