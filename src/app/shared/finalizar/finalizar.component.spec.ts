import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarComponent } from './finalizar.component';

describe('FinalizarComponent', () => {
  let component: FinalizarComponent;
  let fixture: ComponentFixture<FinalizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalizarComponent]
    });
    fixture = TestBed.createComponent(FinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
