import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptPageVenteComponent } from './script-page-vente.component';

describe('ScriptPageVenteComponent', () => {
  let component: ScriptPageVenteComponent;
  let fixture: ComponentFixture<ScriptPageVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptPageVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptPageVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
