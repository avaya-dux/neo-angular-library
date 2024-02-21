import { TestBed } from '@angular/core/testing';

import { NewAngularLibraryService } from './new-angular-library.service';

describe('NewAngularLibraryService', () => {
  let service: NewAngularLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewAngularLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
