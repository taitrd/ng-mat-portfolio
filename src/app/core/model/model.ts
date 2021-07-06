export class Model {
    [index: string]: any;
    constructor() {
    }
    assign<T>(props: T|any): T {
        Object.assign(this, props);
        return this as any;
    }
}
