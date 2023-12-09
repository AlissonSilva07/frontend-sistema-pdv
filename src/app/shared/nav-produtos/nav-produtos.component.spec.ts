import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProdutosComponent } from './nav-produtos.component';

describe('NavProdutosComponent', () => {
  let component: NavProdutosComponent;
  let fixture: ComponentFixture<NavProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavProdutosComponent]
    });
    fixture = TestBed.createComponent(NavProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
