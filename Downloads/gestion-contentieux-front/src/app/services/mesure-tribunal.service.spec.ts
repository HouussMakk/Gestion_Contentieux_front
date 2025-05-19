import { TestBed } from '@angular/core/testing';

import { MesureTribunalService } from './mesure-tribunal.service';

describe('MesureTribunalService', () => {
  let service: MesureTribunalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesureTribunalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
