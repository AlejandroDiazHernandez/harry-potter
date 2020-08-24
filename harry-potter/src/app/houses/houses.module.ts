import { ListService } from './houses-list/services/list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses.component';
import { HousesListComponent } from './houses-list/houses-list.component';
import { HousesDetailsComponent } from './houses-details/houses-details.component';


@NgModule({
  declarations: [HousesComponent, HousesListComponent, HousesDetailsComponent],
  imports: [
    CommonModule,
    HousesRoutingModule
  ],
  providers:[ListService]
})
export class HousesModule { }
