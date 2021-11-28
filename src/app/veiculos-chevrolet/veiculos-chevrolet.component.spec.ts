import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosChevroletComponent } from './veiculos-chevrolet.component';

describe('VeiculosChevroletComponent', () => {
  let component: VeiculosChevroletComponent;
  let fixture: ComponentFixture<VeiculosChevroletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosChevroletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosChevroletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
