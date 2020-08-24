import { SortinghatService } from '../services/sortinghat.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-sortinghat-result',
  templateUrl: './sortinghat-result.component.html',
  styleUrls: ['./sortinghat-result.component.scss']
})
export class SortinghatResultComponent implements OnInit {
 
  public generatorHat: string;
  private gryffindor: string = 'https://images.artistshot.com/designs/165785/165785-250x250.png';
  private ravenclaw: string = 'https://i.pinimg.com/originals/fd/b2/80/fdb2806895fa21b8367bdace96ef4aa2.png';
  private slytherin: string = 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK';
  private hufflepuff: string = 'https://i.pinimg.com/originals/3d/af/c1/3dafc187a67cd577508762150985f65c.png';

  constructor(private sortinghatService: SortinghatService) { }
 
  ngOnInit(): void {
    this.sortinghatService.getSortinghat().subscribe((house: string) => {
      this.generatorHat = this.getImageFromHouse(house);

    }, (err: any) => {
      console.error(err);
    });
  }

  private getImageFromHouse(house: string): string {
    let image ='';
    if(house==='Gryffindor')
    {
      image = this.gryffindor;
    }
    if(house==='Ravenclaw')
    {
      image= this.ravenclaw;
    }
    if(house==='Slytherin')
    {
      image= this.slytherin;
    }
    if(house==='Hufflepuff')
    {
      image= this.hufflepuff;
    }
    return image;
  };
}

  /* public handlerClickHat(): void{
    location.reload();
  }
 */