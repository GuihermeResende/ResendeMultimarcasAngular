import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosToyotaComponent } from './veiculos-toyota.component';

describe('VeiculosToyotaComponent', () => {
  let component: VeiculosToyotaComponent;
  let fixture: ComponentFixture<VeiculosToyotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosToyotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
