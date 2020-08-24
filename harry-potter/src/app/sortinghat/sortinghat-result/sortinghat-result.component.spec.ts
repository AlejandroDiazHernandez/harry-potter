import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortinghatResultComponent } from './sortinghat-result.component';

describe('SortinghatResultComponent', () => {
  let component: SortinghatResultComponent;
  let fixture: ComponentFixture<SortinghatResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortinghatResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortinghatResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
