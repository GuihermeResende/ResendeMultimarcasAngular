import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosNissanComponent } from './veiculos-nissan.component';

describe('VeiculosNissanComponent', () => {
  let component: VeiculosNissanComponent;
  let fixture: ComponentFixture<VeiculosNissanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosNissanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosNissanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
