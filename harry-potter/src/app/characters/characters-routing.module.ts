import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersSearchComponent } from './characters-search/characters-search.component';

const routes: Routes = [
  { 
    path: '', 
    component: CharactersListComponent ,
  },
  {
    path: 'searchForm',
    component: CharactersSearchComponent,
  },
  {
    path: ':id',
    component: CharactersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
