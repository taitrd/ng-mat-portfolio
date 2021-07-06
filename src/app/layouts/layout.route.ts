import { Routes } from '@angular/router';
import { environment } from '@env';
import { ErrorComponent, NotFoundComponent } from './shared';
import { CentredContentLayoutComponent } from './centred-content-layout/centred-content-layout.component';

export const errorRoutes: Routes = [
    {
        path: '400',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: environment.appTitle
        }
    },
    {
        path: '403',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: environment.appTitle,
            error403: true
        }
    }
];


export const notFoundRoutes: Routes = [
    {
        path: '404',
        component: NotFoundComponent,
        data: {
            authorities: [],
            pageTitle: environment.appTitle,
        }
    },
];

export const layoutRoutes: Routes = [
    {
        path: '',
        component: CentredContentLayoutComponent,
        resolve: {},
        children: [
            ...errorRoutes,
            ...notFoundRoutes,
        ],
    },
];
