import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortinghatComponent } from './sortinghat.component';
import { SortinghatResultComponent } from './sortinghat-result/sortinghat-result.component';

const routes: Routes = [
  { 
    path: '', 
    component: SortinghatComponent 
  },
  { 
    path: 'result', 
    component: SortinghatResultComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortinghatRoutingModule { }
