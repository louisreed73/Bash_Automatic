import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuitarsComponent } from './guitars.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GuitarsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:"", component:GuitarsComponent}
    ]),
    CommonModule
  ]
})
export class GuitarsModule { }
