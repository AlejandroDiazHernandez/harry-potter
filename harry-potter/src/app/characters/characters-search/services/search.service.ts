import { HttpClient } from '@angular/common/http';
import { ApiResponseSearch, Search } from '../../models/search-model';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable()
export class SearchService {
 
  private baseUrl = 'https://www.potterapi.com/v1';
  private key = '$2a$10$nYM/zyxmWq9uAXJZqcBChugdE2WN1jg5cRXDKtIJdGj1AW/4HzVBK';
 
  constructor(private http: HttpClient) { }
 
  public getSearchForm(search: Search): Observable<Search[]> {
    
    /* const queryParams = 
    '/characters?key=' + this.key + '&name=' + search.name + '&house=' + search.house + '&bloodStatus=' + search.bloodStatus; */

    let queryParams = 
    '/characters?key=' + this.key ;
    if(search.name){
      queryParams += '&name=' + search.name;
    }

    if(search.house){
      queryParams += '&house=' + search.house;
    }

    if(search.bloodStatus){
      queryParams += '&bloodStatus=' + search.bloodStatus;

    }


    const searchsObs: Observable<Search[]> =
    this.http.get(this.baseUrl + queryParams)
    .pipe(
      map((searchResult: ApiResponseSearch[]) => {
        if (!searchResult){
          throw new Error ('error de resultado!');
        }else{
          const formattedSearch: Search[] = searchResult.map(({name, house, bloodStatus})=>({
            name,
            house,
            bloodStatus,
          }));
            
          return formattedSearch;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
    return searchsObs;
  }
}
