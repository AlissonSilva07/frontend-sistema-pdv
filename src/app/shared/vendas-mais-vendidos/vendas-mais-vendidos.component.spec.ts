import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasMaisVendidosComponent } from './vendas-mais-vendidos.component';

describe('VendasMaisVendidosComponent', () => {
  let component: VendasMaisVendidosComponent;
  let fixture: ComponentFixture<VendasMaisVendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendasMaisVendidosComponent]
    });
    fixture = TestBed.createComponent(VendasMaisVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
