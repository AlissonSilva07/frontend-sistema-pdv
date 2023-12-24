import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasVendasComponent } from './ultimas-vendas.component';

describe('UltimasVendasComponent', () => {
  let component: UltimasVendasComponent;
  let fixture: ComponentFixture<UltimasVendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimasVendasComponent]
    });
    fixture = TestBed.createComponent(UltimasVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
