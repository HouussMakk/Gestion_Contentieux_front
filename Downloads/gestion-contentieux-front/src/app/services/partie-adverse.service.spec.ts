import { TestBed } from '@angular/core/testing';

import { PartieAdverseService } from './partie-adverse.service';

describe('PartieAdverseService', () => {
  let service: PartieAdverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartieAdverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
