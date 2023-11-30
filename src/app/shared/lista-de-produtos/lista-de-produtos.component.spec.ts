import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProdutosComponent } from './lista-de-produtos.component';

describe('ListaDeProdutosComponent', () => {
  let component: ListaDeProdutosComponent;
  let fixture: ComponentFixture<ListaDeProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeProdutosComponent]
    });
    fixture = TestBed.createComponent(ListaDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
