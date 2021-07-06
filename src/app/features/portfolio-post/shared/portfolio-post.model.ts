export interface IPost {
    id?: number;
    slug?: string;
    tags?: string[]|string;
    title?: string;
    description?: string;
    text?: string;
    level?: string|string[];
    meta?: any;
}

export class Post implements IPost {
    constructor(props: IPost = {
        meta: {},
    }) {
        Object.assign(this, props);
    }
}
