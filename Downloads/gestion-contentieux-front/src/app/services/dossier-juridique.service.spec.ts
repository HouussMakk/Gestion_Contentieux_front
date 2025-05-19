import { TestBed } from '@angular/core/testing';

import { DossierJuridiqueService } from './dossier-juridique.service';

describe('DossierJuridiqueService', () => {
  let service: DossierJuridiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierJuridiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
