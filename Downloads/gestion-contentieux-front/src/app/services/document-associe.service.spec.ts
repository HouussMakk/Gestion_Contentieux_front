import { TestBed } from '@angular/core/testing';

import { DocumentAssocieService } from './document-associe.service';

describe('DocumentAssocieService', () => {
  let service: DocumentAssocieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentAssocieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
