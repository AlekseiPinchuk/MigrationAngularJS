import { NgModule } from '@angular/core';
import { NumberToFixedPipe } from './pipes/number-to-fixed.pipe';

//usage example
@NgModule({
  imports: [
    //
  ],
  declarations: [
    NumberToFixedPipe,
  ],
  exports: [
    NumberToFixedPipe,
  ]
})
export class PipesModule {}
