import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosMercedesBenzComponent } from './veiculos-mercedes-benz.component';

describe('VeiculosMercedesBenzComponent', () => {
  let component: VeiculosMercedesBenzComponent;
  let fixture: ComponentFixture<VeiculosMercedesBenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosMercedesBenzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosMercedesBenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
