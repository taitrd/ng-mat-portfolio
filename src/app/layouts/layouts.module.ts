import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';
import { SharedModule } from '@shared';
import { SplitLayoutComponent } from './split-layout/split-layout.component';
import { CentredContentLayoutComponent } from './centred-content-layout/centred-content-layout.component';
import { ErrorComponent, NotFoundComponent } from './shared';

@NgModule({
  declarations: [
    SplitLayoutComponent,
    CentredContentLayoutComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ]
})
export class LayoutsModule { }
