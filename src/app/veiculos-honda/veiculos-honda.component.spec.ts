import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosHondaComponent } from './veiculos-honda.component';

describe('VeiculosHondaComponent', () => {
  let component: VeiculosHondaComponent;
  let fixture: ComponentFixture<VeiculosHondaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosHondaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosHondaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
