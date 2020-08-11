import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BassComponent } from './bass.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BassComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:"", component:BassComponent}
    ]),
    CommonModule
  ]
})
export class BassModule { }
