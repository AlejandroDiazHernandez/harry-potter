import { SortinghatService } from './services/sortinghat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortinghatRoutingModule } from './sortinghat-routing.module';
import { SortinghatComponent } from './sortinghat.component';
import { SortinghatResultComponent } from './sortinghat-result/sortinghat-result.component';


@NgModule({
  declarations: [SortinghatComponent, SortinghatResultComponent],
  imports: [
    CommonModule,
    SortinghatRoutingModule
  ],
  providers: [SortinghatService]
})
export class SortinghatModule { }
