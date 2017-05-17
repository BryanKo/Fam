import { TestBed, inject } from '@angular/core/testing';

import { RecoService } from './reco.service';

describe('RecoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecoService]
    });
  });

  it('should ...', inject([RecoService], (service: RecoService) => {
    expect(service).toBeTruthy();
  }));
});
