import { NgModule } from '@angular/core';
import { PortfolioProfileComponent } from './portfolio-profile/portfolio-profile.component';
import { SharedModule } from '@shared';
import { PortfolioAboutComponent } from './portfolio-about/portfolio-about.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';
import { PortfolioService } from './shared';

@NgModule({
  declarations: [
    PortfolioProfileComponent,
    PortfolioAboutComponent,
    PortfolioHomeComponent,
  ],
  providers: [PortfolioService],
  imports: [
    SharedModule,
  ]
})
export class PortfolioModule { }
