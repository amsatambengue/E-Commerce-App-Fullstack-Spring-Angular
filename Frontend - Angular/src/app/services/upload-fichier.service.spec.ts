import { TestBed } from '@angular/core/testing';

import { UploadFichierService } from './upload-fichier.service';

describe('UploadFichierService', () => {
  let service: UploadFichierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFichierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
