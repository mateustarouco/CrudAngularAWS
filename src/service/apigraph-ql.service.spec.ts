import { TestBed } from '@angular/core/testing';

import { APIGraphQLService } from './apigraph-qlservice';

describe('APIGraphQLService', () => {
  let service: APIGraphQLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIGraphQLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
