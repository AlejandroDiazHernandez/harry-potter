import { Component, OnInit } from '@angular/core';
import { CharactersDetails } from '../models/characters-model-interface';
import { DetailsService } from './services/details.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
 
  public charactersDetails: CharactersDetails;
  public characterId: string;
 
  constructor(private detailsService: DetailsService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.characterId = params.get('id'); });
    this.detailsService.getcharactersDetail().subscribe((data: CharactersDetails[]) => {
      console.log(typeof(this.characterId));
      this.charactersDetails = data.filter(character => character.id === Number(this.characterId))[0];
      console.log(this.charactersDetails);
    }, (err) => {
      console.error(err);
    });
  }
}