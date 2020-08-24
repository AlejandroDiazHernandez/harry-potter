import { SearchService } from './services/search.service';
import { Search } from './../models/search-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters-search',
  templateUrl: './characters-search.component.html',
  styleUrls: ['./characters-search.component.scss']
})
export class CharactersSearchComponent implements OnInit {

  public searchFormGroup: FormGroup = null;
  public bloodStatusList: string[] = [
    'half-blood',
    'half-giant',
    'muggle',
    'muggle-born',
    'pure-blood',
    'quarter-villa',
    'squib',
    'unknown',
  ];

  public submitted: boolean = false;
  public searchList: Search[];

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {

    this.searchFormGroup = this.formBuilder.group({
      name: ['', [Validators.minLength(5)]],
      house: [''],
      bloodStatus: ['']
    });
   }

  ngOnInit(): void {
  }

  onSearchSubmit(): void {
    // El usuario ha pulsado en enviar
    this.submitted = true;

    if (this.searchFormGroup.valid) {
      // Creamos un artículo y lo emitimos
      const search: Search = {
        name: this.searchFormGroup.get('name').value,
        house: this.searchFormGroup.get('house').value,
        bloodStatus: this.searchFormGroup.get('bloodStatus').value,
      };
      console.log(search);

      this.getSearchList(search);

      // Reseteamos todos los campos y el indicador de envío
      /* this.searchFormGroup.reset(); */
      this.submitted = false;
    } else {
      console.log('Contiene errores :(');
    }
  }

  public reset(): void {
    this.searchFormGroup.reset();
  }

  private getSearchList(search: Search): void {
    this.searchService.getSearchForm(search).subscribe((data: Search[]) =>{
      this.searchList = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });
  }
}
