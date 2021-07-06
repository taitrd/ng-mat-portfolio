import { ILayout, LAYOUT } from './layout.model';

export const layouts: ILayout[] = [
    {
        name: LAYOUT.DOC,
        main: 'div',
        nav: 'fixed',
    },
    {
        name: LAYOUT.ADMIN,
        main: 'div',
        nav: 'static',
    },
    {
        name: LAYOUT.SPLIT,
        main: 'div',
        nav: 'fixed',
        sidebar: 'fixed left',
    }
];
