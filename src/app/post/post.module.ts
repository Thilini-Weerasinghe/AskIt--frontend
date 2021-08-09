import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepostComponent } from './createpost/createpost.component';



@NgModule({
  declarations: [
    CreatepostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreatepostComponent
  ]
})
export class PostModule { }
