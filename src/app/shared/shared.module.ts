import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeRightbarComponent } from './components/home-rightbar/home-rightbar.component';
import { ProfileRightbarComponent } from './components/profile-rightbar/profile-rightbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { MaterialModule } from './modules/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    TopbarComponent,
    HomeRightbarComponent,
    ProfileRightbarComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    TopbarComponent,
    HomeRightbarComponent,
    ProfileRightbarComponent,
    FeedComponent
  ]
})
export class SharedModule { }
