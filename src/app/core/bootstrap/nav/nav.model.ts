import { Model } from '@core/model';
import { INavItem } from './nav-item.model';

export type NavName = 'main' |
    'secondary' |
    'top' |
    'widget-share' |
    'sidebar' |
    'sidebar-bottom' |
    'footer' |
    'mobile-bottom';

export type NavPosition = 'default' |
    'top' |
    'bottom' |
    'left' |
    'right';

export type NavType = 'default' |
    'tabs' |
    'tiles';

export interface INav {
    position?: NavPosition;
    type?: NavType;
    navItems: INavItem[];
}

export class Nav extends Model implements INav {
    position?: NavPosition;
    type?: NavType;
    navItems: INavItem[];
    constructor() {
        super();
        this.navItems = [];
        this.position = 'default';
        this.type = 'default';
    }
}
