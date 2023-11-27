import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaHistoricoComponent } from './tela-historico.component';

describe('TelaHistoricoComponent', () => {
  let component: TelaHistoricoComponent;
  let fixture: ComponentFixture<TelaHistoricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaHistoricoComponent]
    });
    fixture = TestBed.createComponent(TelaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
