import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousesListComponent } from './houses-list/houses-list.component';
import { HousesDetailsComponent } from './houses-details/houses-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: HousesListComponent,
  },
  {
    path: ':id',
    component: HousesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
