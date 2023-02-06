
interface IModule {
    name: string,
    extendStore: any[],
    featureKeys: string[],
    log: any,
    check: any,
    process: any,
    typeGaurds: string[][],
    renderGaurds: string[][]
}

export default class Module {

    private data: IModule;

    public constructor() {
        this.data = {} as any;
    }
};


