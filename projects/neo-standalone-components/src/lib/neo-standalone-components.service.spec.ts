import { TestBed } from '@angular/core/testing';

import { NeoStandaloneComponentsService } from './neo-standalone-components.service';

describe('NeoStandaloneComponentsService', () => {
  let service: NeoStandaloneComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoStandaloneComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
