import { TestBed } from '@angular/core/testing';

import { FileoperationService } from './fileoperation.service';

describe('FileoperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileoperationService = TestBed.get(FileoperationService);
    expect(service).toBeTruthy();
  });
});
