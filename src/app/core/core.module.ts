import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './services';
import { LayoutService } from './bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EventService,
    LayoutService,
  ]
})
export class CoreModule { }
