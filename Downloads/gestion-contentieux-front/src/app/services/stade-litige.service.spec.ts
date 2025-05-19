import { TestBed } from '@angular/core/testing';

import { StadeLitigeService } from './stade-litige.service';

describe('StadeLitigeService', () => {
  let service: StadeLitigeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StadeLitigeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
