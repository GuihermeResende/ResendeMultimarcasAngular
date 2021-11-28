import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosHyundaiComponent } from './veiculos-hyundai.component';

describe('VeiculosHyundaiComponent', () => {
  let component: VeiculosHyundaiComponent;
  let fixture: ComponentFixture<VeiculosHyundaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosHyundaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosHyundaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
