import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'characters', 
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) 
  }, 
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'sortinghat', 
    loadChildren: () => import('./sortinghat/sortinghat.module').then(m => m.SortinghatModule) 
  }, 
  { 
    path: 'houses', 
    loadChildren: () => import('./houses/houses.module').then(m => m.HousesModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

