import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes.module';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [
    //declare components from ./components there
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    PipesModule,
  ],
  providers: [
    //declare services & interceptors there
    LocalStorageService,
  ]
})
export class CoreModule {}
