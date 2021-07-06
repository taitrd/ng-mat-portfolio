import { Model } from '@core/model';

export interface INgElementAttributes {
    ngClass?: string | string[] | Set<string> | {
        [key: string]: any;
    };
    ngStyle?: {
        [key: string]: string|number;
    };
    ngElementRef?: any;
}

export enum LAYOUT {
    ADMIN = 'admin',
    DOC = 'doc',
    BLOG = 'blog',
    PORTFOLIO = 'portfolio',
    LANDING_PAGE = 'landing-page',
    SPLIT = 'split',
    CENTRED_CONTENT = 'centred-content',
    TAB = 'tab',
    FRONTEND = 'frontend',
    MAT_SIDE_NAV = 'mat-side-nav',
    SINGLE_COLUMN = 'single-column',
}

export interface ILayout {
    name: LAYOUT;
    column?: boolean | 'single' | 'box';
    header?: boolean | 'top';
    sidebar?: boolean | 'left' | 'right' | 'fixed left';

    nav: 'static' | 'fixed';
    main: 'article' | 'section' | 'div';
    footer?: boolean | 'flex' | 'fixed';
}

export class Layout extends Model implements ILayout {
    name: LAYOUT;
    column?: boolean | 'single' | 'box';
    header?: boolean | 'top';
    sidebar?: boolean | 'left' | 'right' | 'fixed left';
    nav: 'static' | 'fixed';
    main: 'article' | 'section' | 'div';
    footer?: boolean | 'fixed' | 'flex';

    ngNavOptions?: INgElementAttributes;
    ngSidebarOptions?: INgElementAttributes;
    ngLayoutOptions?: INgElementAttributes;
    ngMainOptions?: INgElementAttributes;

    constructor() {
        super();
        this.name = LAYOUT.DOC;
        this.nav = 'static';
        this.main = 'div';

        this.ngNavOptions = {
            ngClass: null,
            ngStyle: null,
            ngElementRef: null,
        };

        this.ngSidebarOptions = {
            ngClass: null,
            ngStyle: null,
        };

        this.ngLayoutOptions = {
            ngClass: null,
            ngStyle: null,
        };

        this.ngMainOptions = {
            ngClass: null,
            ngStyle: null,
        };
    }

    build(): ILayout {
        this.buildLayout();
        this.buildNav();
        this.buildMain();
        this.buildSidebar();
        return this;
    }

    buildLayout(): void {
        switch (this.name) {
            case LAYOUT.DOC:
            case LAYOUT.ADMIN:
            case LAYOUT.SPLIT:
                /**
                 * View report style column
                 */
                this.ngLayoutOptions.ngStyle = {
                    // display: 'flex',
                    // 'flex-direction': 'column',
                    height: '100vh',
                };
                break;
        }
    }

    buildNav(): void {
        switch (this.nav) {
            case 'fixed':
                this.ngNavOptions.ngStyle = {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    'z-index': 1,
                };
                break;
        }
    }

    buildSidebar(): void {
        switch (this.sidebar) {
            case 'fixed left':
                this.ngSidebarOptions.ngStyle = {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    'z-index': 1,
                };
                break;
        }
    }

    buildMain(): void {
        switch (this.name) {
            case LAYOUT.DOC:
                break;
        }
    }
}
