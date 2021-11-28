import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosFiatComponent } from './veiculos-fiat.component';

describe('VeiculosFiatComponent', () => {
  let component: VeiculosFiatComponent;
  let fixture: ComponentFixture<VeiculosFiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosFiatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosFiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
