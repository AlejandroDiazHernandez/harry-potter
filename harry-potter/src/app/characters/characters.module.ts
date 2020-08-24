import { RouterModule } from '@angular/router';
import { SearchService } from './characters-search/services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersSearchComponent } from './characters-search/characters-search.component';
import { ListService } from './characters-list/services/list.service';
import { DetailsService } from './characters-details/services/details.service';
import { CharacterListItemComponent } from './characters-list/character-list-item/character-list-item.component';


@NgModule({
  declarations: [CharactersComponent, CharactersListComponent, CharactersDetailsComponent, CharactersSearchComponent, CharacterListItemComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ListService, DetailsService, SearchService]
})
export class CharactersModule { }
