import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import {
  IsArrayPipe,
  TagPipe,
} from './pipes';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    TagPipe,
    IsArrayPipe,
    SafePipe,
  ],
  providers: [
  ],
  exports: [
    SharedLibsModule,
    TagPipe,
    IsArrayPipe,
    SafePipe,
  ],
})
export class SharedCommonModule {}
