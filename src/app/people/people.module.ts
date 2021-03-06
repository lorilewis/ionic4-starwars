import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicPageModule } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { PeoplePage } from './people.page';

const routes: Routes = [
  {
    path: '',
    component: PeoplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    IonicPageModule.forChild(PeoplePage),
    RouterModule.forChild(routes)
  ],
  declarations: [PeoplePage]
})
export class PeoplePageModule {}
