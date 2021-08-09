import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { CreateprofileComponent } from './profile/createprofile/createprofile.component';

const routes: Routes = [
  {path: 'login/register', component: RegisterComponent}, 
  {path: 'login/reset-password', component: ResetPasswordComponent}, 
  {path: 'profile', component: CreateprofileComponent},
  {path: '', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
