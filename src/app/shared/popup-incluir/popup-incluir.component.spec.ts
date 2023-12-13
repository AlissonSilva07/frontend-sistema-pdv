import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupIncluirComponent } from './popup-incluir.component';

describe('PopupIncluirComponent', () => {
  let component: PopupIncluirComponent;
  let fixture: ComponentFixture<PopupIncluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupIncluirComponent]
    });
    fixture = TestBed.createComponent(PopupIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
