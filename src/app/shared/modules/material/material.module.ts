// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatIcon, MatIconModule } from '@angular/material/icon';
// import { AppModule } from 'src/app/app.module';
// import { ProfileModule } from 'src/app/profile/profile.module';

// const materialModules = [
//   MatIconModule,
//   AppModule,
//   ProfileModule
// ];

// @NgModule({
//   declarations: [ ],
//   imports: [
//     CommonModule,
//     MatIconModule,
//   ],
//   exports: [
//   materialModules
//   ]
// })
// export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }