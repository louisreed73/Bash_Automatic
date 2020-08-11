import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from "src/app/components/form/form.component";





@NgModule({
  declarations: [
    ContactComponent,
    FormComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:"", component:ContactComponent}
    ]),
    CommonModule,
    


  ]
})
export class ContactModule { }
