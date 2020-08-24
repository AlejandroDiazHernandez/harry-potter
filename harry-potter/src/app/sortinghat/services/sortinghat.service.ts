import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class SortinghatService {
  public sortinghatUrl = 'https://www.potterapi.com/v1/sortinghat?key=$2a$10$zNB5zxdPn7bQGKFcugvvl.184hWMGSCVJJxsxxPKRlSPVosM2aBSW';
 
  constructor(private http: HttpClient) { /* empty */}
 
  public getSortinghat(): Observable<any> {
    const sortinghat: Observable<any> = this.http.get(this.sortinghatUrl);
    return sortinghat;
  }
}