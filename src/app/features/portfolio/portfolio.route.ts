import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PortfolioProfileComponent } from './portfolio-profile/portfolio-profile.component';

export const featurePortfolioRoutes = [
    {
      path: '',
      component: PortfolioProfileComponent,
      outlet: 'left-outlet'
    },
    {
      path: '',
      component: PortfolioHomeComponent,
      data: {pageTitle: 'Home'}
    },
    {
      path: 'about',
      component: PortfolioAboutComponent,
      data: {pageTitle: 'About'}
    },
];
