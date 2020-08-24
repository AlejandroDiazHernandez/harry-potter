import { ListService } from './../characters-list/services/list.service';
import { Component, OnInit} from '@angular/core';
import { Characters } from '../models/characters-model-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  public charactersList: Characters[];

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.listService.getCharactersList().subscribe((data: Characters[]) =>{
      this.charactersList = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });
  }
  public navigateTo(index: number): void{
    this.router.navigateByUrl('characters/'+ index);
  }
}
