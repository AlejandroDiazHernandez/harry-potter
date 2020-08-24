import { map, catchError } from 'rxjs/operators';
import { ApiResponseCharacters, CharactersDetails, Wand } from '../../models/characters-model-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable()
export class DetailsService {
 
  private baseUrl = 'http://hp-api.herokuapp.com/api/characters ';
 
  constructor(private http: HttpClient) { }
 
  public getcharactersDetail(): Observable<CharactersDetails[]> {
 
    const charactersDetailsObs: Observable<CharactersDetails[]> = this.http.get(this.baseUrl)
    .pipe(
      map((result: ApiResponseCharacters[]) => {
        if (!result){
          throw new Error ('No se encuentran los detalles, error!!');
        }else{
 
          const formattedCharactersDetails =
          result.map(({ name, image, dateOfBirth, ancestry, wand, patronus, hogwartsStudent, hogwartsStaff, actor} , id) => ({
            id,
            name,
            image,
            dateOfBirth,
            ancestry,
            wand: {
              wood: wand.wood,
              core: wand.core,
              length: wand.length
            },
            patronus,
            hogwartsStudent,
            hogwartsStaff,
            actor,
 
          }));
 
          return formattedCharactersDetails;
 
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
 
    return charactersDetailsObs;
  }
}
