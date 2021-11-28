import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosBmwComponent } from './veiculos-bmw.component';

describe('VeiculosBmwComponent', () => {
  let component: VeiculosBmwComponent;
  let fixture: ComponentFixture<VeiculosBmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosBmwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
