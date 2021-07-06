import { NgModule } from '@angular/core';
import { PortfolioPostDetailComponent } from './portfolio-post-detail/portfolio-post-detail.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [PortfolioPostDetailComponent],
  imports: [
    SharedModule,
  ]
})
export class PortfolioPostModule { }
