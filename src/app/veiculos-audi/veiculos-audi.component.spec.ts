import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosAudiComponent } from './veiculos-audi.component';

describe('VeiculosAudiComponent', () => {
  let component: VeiculosAudiComponent;
  let fixture: ComponentFixture<VeiculosAudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosAudiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosAudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
