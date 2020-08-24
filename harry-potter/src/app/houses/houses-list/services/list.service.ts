import { Houses, ApiResponseHouses } from './../../models/houses-model';
import { Observable } from 'rxjs';
import { HousesUtil } from './../../utils/class-utils';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ListService {

  public housesUrl: string = 'https://www.potterapi.com/v1/houses?key=$2a$10$nYM/zyxmWq9uAXJZqcBChugdE2WN1jg5cRXDKtIJdGj1AW/4HzVBK';

  public housesUtil: any;

  constructor(private http: HttpClient) { 
    this.housesUtil = new HousesUtil();
  }

  public getHousesList() {
    const housessObs: Observable<any>/* <Houses[]> */ = this.http.get(this.housesUrl)
    .pipe(
      map((result: ApiResponseHouses[]) =>{
        if(!result){
          throw new Error ('No se encuentra');
        }else{
          const formattedHouses = result.map(({ name, mascot, headOfHouse, houseGhost, founder, values}, index, img) =>({
            name,        
            mascot,      
            headOfHouse, 
            houseGhost,  
            founder,
            values,
            img: this.housesUtil.imgList[index].img, 
          }));
          return formattedHouses;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
    return housessObs;
  }
}
