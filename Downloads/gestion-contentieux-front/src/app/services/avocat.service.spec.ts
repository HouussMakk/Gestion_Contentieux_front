import { TestBed } from '@angular/core/testing';

import { AvocatService } from './avocat.service';

describe('AvocatService', () => {
  let service: AvocatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvocatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
