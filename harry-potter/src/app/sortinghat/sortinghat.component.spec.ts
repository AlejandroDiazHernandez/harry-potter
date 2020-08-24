import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortinghatComponent } from './sortinghat.component';

describe('SortinghatComponent', () => {
  let component: SortinghatComponent;
  let fixture: ComponentFixture<SortinghatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortinghatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortinghatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
