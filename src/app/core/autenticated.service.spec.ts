import { TestBed } from '@angular/core/testing';

import { AutenticatedService } from './autenticatedservice';

describe('AutenticatedService', () => {
  let service: AutenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
