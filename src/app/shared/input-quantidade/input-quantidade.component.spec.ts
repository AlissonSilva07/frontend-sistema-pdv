import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuantidadeComponent } from './input-quantidade.component';

describe('InputQuantidadeComponent', () => {
  let component: InputQuantidadeComponent;
  let fixture: ComponentFixture<InputQuantidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputQuantidadeComponent]
    });
    fixture = TestBed.createComponent(InputQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
