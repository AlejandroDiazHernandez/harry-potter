import { map, catchError } from 'rxjs/operators';
import { Characters, ApiResponseCharacters } from '../../models/characters-model-interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {

  private baseUrl = 'http://hp-api.herokuapp.com/api/characters ';

  constructor(private http: HttpClient) { }

  public getCharactersList() {
    const charactersObs: Observable<Characters[]> = this.http.get(this.baseUrl)
    .pipe(
      map((result: ApiResponseCharacters[]) =>{
        if(!result){
          throw new Error ('No se encuentra');
        }else{
          const formattedCharacters = result.map(({ name, image}) =>({
            name,
            image,
          }));
          return formattedCharacters;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
    return charactersObs;
  }
}
