import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasHojeComponent } from './vendas-hoje.component';

describe('VendasHojeComponent', () => {
  let component: VendasHojeComponent;
  let fixture: ComponentFixture<VendasHojeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendasHojeComponent]
    });
    fixture = TestBed.createComponent(VendasHojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
