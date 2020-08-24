import { Houses } from './../models/houses-model';
import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent implements OnInit {

  public housesList: Houses[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.getHousesList().subscribe((data: Houses[]) =>{
      this.housesList = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });
  }

}
