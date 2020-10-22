import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomAccrocheComponent } from './random-accroche.component';

describe('RandomAccrocheComponent', () => {
  let component: RandomAccrocheComponent;
  let fixture: ComponentFixture<RandomAccrocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomAccrocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomAccrocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
