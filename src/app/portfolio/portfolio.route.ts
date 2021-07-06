import { Routes } from '@angular/router';
import { environment } from '@env';
import { SplitLayoutComponent } from '@layouts/split-layout/split-layout.component';
import { featurePortfolioRoutes } from '../features';
import { portfolioPostRoutes } from '../features/portfolio-post';

export const portfolioRoutes: Routes = [
    ...featurePortfolioRoutes,
    ...portfolioPostRoutes,
];

export const portfolioLayoutRoutes: Routes = [
    {
        path: '', data: { layout: environment.defaultLayout },
        component: SplitLayoutComponent,
        loadChildren: () => import('./portfolio.module').then(m => m.PortfolioModule)
    },
];
