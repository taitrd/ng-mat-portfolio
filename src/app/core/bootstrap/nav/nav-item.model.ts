export interface INavItemTag {
  color: string; // background color
  value: string;
}

export interface INavChildrenItem {
  route: string;
  name: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink' | 'button';
  children?: INavChildrenItem[];
  click?: any;
}

export interface INavItem {
  route: string;
  name: string;
  displayName?: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  icon: string;
  iconClass?: string;
  iconName?: string;
  label?: INavItemTag;
  badge?: INavItemTag;
  children?: INavChildrenItem[];
  click?: any;
}
