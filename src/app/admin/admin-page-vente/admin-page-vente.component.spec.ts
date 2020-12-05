import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageVenteComponent } from './admin-page-vente.component';

describe('AdminPageVenteComponent', () => {
  let component: AdminPageVenteComponent;
  let fixture: ComponentFixture<AdminPageVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
