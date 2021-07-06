import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env';
import { layoutRoutes } from '@layouts';
import { portfolioLayoutRoutes } from './portfolio/portfolio.route';

const routes: Routes = [
  ...portfolioLayoutRoutes,
  ...layoutRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      ...routes,
      {
        path: '**',
        redirectTo: '404',
      },
    ],
    { enableTracing: environment.debugRouter }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
