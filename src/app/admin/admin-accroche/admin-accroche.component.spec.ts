import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccrocheComponent } from './admin-accroche.component';

describe('AdminAccrocheComponent', () => {
  let component: AdminAccrocheComponent;
  let fixture: ComponentFixture<AdminAccrocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccrocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccrocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
