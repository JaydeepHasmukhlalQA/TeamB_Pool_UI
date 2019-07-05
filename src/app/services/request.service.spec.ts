import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { Observable } from 'rxjs';
import { url } from 'inspector';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});

