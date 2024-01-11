import { TestBed } from '@angular/core/testing';

import { ListaProdutosService } from './lista-produtos.service';

describe('ListaProdutosService', () => {
  let service: ListaProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
