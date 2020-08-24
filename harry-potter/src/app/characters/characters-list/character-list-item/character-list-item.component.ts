import { Characters } from './../../../../../../../harry-potter-project/src/app/characters/models/characters-model-interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {
  @Input() character:Characters;
  @Input() index:number;

  @Output() navigate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleClick(): void {
    this.navigate.emit(this.index);
  }

}
