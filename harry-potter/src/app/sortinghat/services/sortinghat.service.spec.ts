import { TestBed } from '@angular/core/testing';

import { SortinghatService } from './sortinghat.service';

describe('SortinghatService', () => {
  let service: SortinghatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortinghatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
