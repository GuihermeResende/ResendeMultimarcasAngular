import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosVolkswagemComponent } from './veiculos-volkswagem.component';

describe('VeiculosVolkswagemComponent', () => {
  let component: VeiculosVolkswagemComponent;
  let fixture: ComponentFixture<VeiculosVolkswagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosVolkswagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosVolkswagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
