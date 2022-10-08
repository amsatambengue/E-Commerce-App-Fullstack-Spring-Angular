import { TestBed } from '@angular/core/testing';

import { BasicAuthHTTPInterceptorService } from './basic-auth-httpinterceptor.service';

describe('BasicAuthHTTPInterceptorService', () => {
  let service: BasicAuthHTTPInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHTTPInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
