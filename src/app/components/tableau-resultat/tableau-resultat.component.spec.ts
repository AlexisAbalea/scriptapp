import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauResultatComponent } from './tableau-resultat.component';

describe('TableauResultatComponent', () => {
  let component: TableauResultatComponent;
  let fixture: ComponentFixture<TableauResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauResultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
