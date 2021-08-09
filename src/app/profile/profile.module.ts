import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../shared/modules/material/material.module';



@NgModule({
  declarations: [
    CreateprofileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule

  ],
  exports: [
    CreateprofileComponent
  ]
})
export class ProfileModule { }
