import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared';
import { portfolioRoutes } from './portfolio.route';
import { PortfolioModule as FeaturePortfolioModule } from '../features';
import { PortfolioPostModule } from '../features/portfolio-post';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    FeaturePortfolioModule,
    PortfolioPostModule,
    RouterModule.forChild(portfolioRoutes),
  ]
})
export class PortfolioModule { }
